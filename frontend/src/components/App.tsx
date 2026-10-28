import './App.css'
import {useState} from 'react'
import Github from './Github'
import Toast from './Toast'
import createContent from './createContent'
export default function App(){
    const [bundler,setBundler] = useState<'npm'|'pip'|'dotnet'|'go'|'vcpkg'|'gem'|'composer'|'cargo'>('npm')
    const [packages,setPackages] = useState<Record<string,string>>({"axios":"","typescript":"","express":""})
    const [fileName,setFileName] = useState<string>("setup.bat")
    const [toast,setToast] = useState<{msg:string,ok:boolean}>({msg:"",ok:false})
    const [showAdd,setShowAdd] = useState(false)
    const [showEdit,setShowEdit] = useState(false)
    const [currEdit,setCurrEdit] = useState("")
    const [editedPackageNewName,setEditedPackageNewName] = useState("")
    const [newPackage,setNewPackage] = useState<{name:string,version:string}>({name:"",version:""})
    function resetToast(){
        setTimeout(()=>{
            setToast({msg:"",ok:false})
        },3000)
    }
    function saveFile(){
        if(fileName.length === 0){
            setToast({msg:"Enter a file name.",ok:false})
            return
        }
        const command = createContent(bundler,packages)
        const blob = new Blob([command],{type:"text/plain;charset=utf-8"})
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        let downloadName = fileName
        if(downloadName.slice(downloadName.length - 4) !== '.bat'){
            downloadName += '.bat'
        }
        link.href = url
        link.download = downloadName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
        setToast({msg:"File downloaded.",ok:true})
        resetToast()
    }
    return ( 
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Batch File Setup Configurer</h1>
            <h4><a href='/guide' className='text-blue-500 underline'>Guide if you're new!</a></h4>
            <div className='flex flex-col gap-6'>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">File name:</label>
                    <input type='text' value={fileName} onChange={(e)=>{setFileName(e.target.value)}} className='border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">Downloader:</label>
                    <select value={bundler} onChange={(e)=>{
                        setBundler(e.target.value as 'npm'|'pip'|'dotnet'|'go'|'vcpkg'|'gem'|'composer'|'cargo')
                    }} className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none">
                        <option value="npm">npm (Typescript/Javscript)</option>
                        <option value='pip'>pip (Python)</option>
                        <option value='dotnet'>dotnet (C#/.NET)</option>
                        <option value='go'>go (Go)</option>
                        <option value='vcpkg'>vcpkg (C/C++)</option>
                        <option value='gem'>gem (Ruby)</option>
                        <option value='composer'>composer (PHP)</option>
                        <option value='cargo'>cargo (Rust)</option>
                    </select>
                </div>
                {Object.keys(packages).map((val,idx)=>(
                    <div key={idx} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-md border border-gray-200">
                            <p className="font-medium">{val} ({packages[val] === '' ? 'Latest Version' : "Version " + packages[val]})</p>
                            <div className="flex gap-2">
                                <button className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600' onClick={()=>{
                                    setShowEdit(true)
                                    setCurrEdit(val)
                                    setEditedPackageNewName(val)
                                }}>Edit</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600' onClick={()=>{
                                    setPackages(p => {
                                        let newPackages:Record<string,string> = {}
                                        for(var x of Object.keys(p)){
                                            if(x !== val){
                                                newPackages[x] = p[x]
                                            }
                                        }
                                        return newPackages
                                    })
                                    setToast({msg:`Package ${val} deleted`,ok:true})
                                    resetToast()
                                }}>Delete</button>
                            </div>
                        </div>
                        {showEdit && currEdit === val && (
                            <div className="space-y-2 p-4 border border-blue-200 rounded-md bg-blue-50">
                                <input type='text' value={editedPackageNewName} onChange={(e)=>{
                                    setEditedPackageNewName(e.target.value)
                                }} className="w-full border border-gray-300 rounded-md p-2" placeholder="New Package Name" />
                                <input type='text' value={packages[val]} onChange={(e)=>{
                                    const newVal = e.target.value
                                    setPackages(p => ({...p, [val]: newVal}))
                                }} className="w-full border border-gray-300 rounded-md p-2" placeholder="New Version" />
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={()=>{
                                    setCurrEdit("")
                                    setShowEdit(false)
                                    setPackages(p=>{
                                        let newPackages:Record<string,string> = {}
                                        for(var x of Object.keys(p)){
                                            if(x === val){
                                                newPackages[editedPackageNewName] = p[x]
                                            } else {
                                                newPackages[x] = p[x]
                                            }
                                        }
                                        return newPackages
                                    })
                                    setToast({msg:`Package ${val} edited`,ok:true})
                                    resetToast()
                                    setEditedPackageNewName("")
                                }}>Done</button>
                            </div>
                        )}
                    </div>
                ))}
                {showAdd === true && (
                    <div className="space-y-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                        <div>
                            <label className="block font-medium">Package Name:</label>
                            <input type='text' value={newPackage.name} className='w-full border border-gray-300 rounded-md p-2' onChange={(e)=>{
                                setNewPackage({
                                    ...newPackage,
                                    name:e.target.value
                                })
                            }} />
                        </div>
                        <div>
                            <label className="block font-medium">Package Version (Leave blank for latest):</label>
                            <input type='text' className='w-full border border-gray-300 rounded-md p-2' value={newPackage.version} onChange={(e)=>{
                                setNewPackage({
                                    ...newPackage,
                                    version:e.target.value
                                })
                            }} />
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={()=>{
                            if(newPackage.name !== ''){
                                setPackages(p => {
                                    let newPackages = {...p}
                                    newPackages[newPackage.name] = newPackage.version
                                    return newPackages
                                })
                                setToast({msg:`Successfully added ${newPackage.name} (${newPackage.version === '' ? 'Latest Version' : "Version " + newPackage.version})`,ok:true})
                            }else {
                                setToast({msg:"The package must have a name",ok:false})
                            }
                            setNewPackage({name:'',version:''})
                            resetToast()
                            setShowAdd(false)
                        }}>Done</button>
                    </div>
                )}
                <div className="flex gap-4">
                    <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300" onClick={()=>setShowAdd(show=>!show)}>Add new package</button>
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={saveFile}>Create file</button>
                </div>
            </div>
            {toast.msg.length > 0 && <Toast msg={toast.msg} ok={toast.ok} />}
            <Github repo={"https://github.com/bruzz-bruzz/project-setup-tool"} />
        </div>
    )
}