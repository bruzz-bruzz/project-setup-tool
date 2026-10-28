import './App.css'
type Data = {
    msg:string,
    ok:boolean
}
export default function Toast({msg,ok}:Data){
    return (
        <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg border text-white ${ok === true ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600'}`}>
            <p className="font-medium">{msg}</p>
        </div>
    )
}