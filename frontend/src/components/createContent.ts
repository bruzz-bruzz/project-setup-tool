export default function createContent(bundler:'pip'|'npm'|'dotnet'|'go'|'vcpkg'|'gem'|'composer'|'cargo',packages:Record<string,string>):string{
    const installCommands = {
        'pip':"pip install",
        'npm':"npm install",
        "dotnet":"dotnet add package",
        "go":"go get",
        "vcpkg":"vcpkg install",
        "gem":"gem install",
        "composer":"composer require",
        "cargo":"cargo add"
    }
    const versionIdentifiers = {
        'pip':"==",
        'npm':"@",
        'go':"@v",
        'cargo':"@",
        'gem':" --v ",
        "composer":":",
        'dotnet':" --v ",
        "vcpkg":""
    }
    let content = installCommands[bundler]
    let packageArr = []
    for(const x of Object.keys(packages)){
        if(bundler === 'dotnet'){
            if(packages[x] !== ''){
                packageArr.push(`dotnet add package ${x}${versionIdentifiers[bundler]}${packages[x]}`)
            }else {
                packageArr.push(`dotnet add package ${x}`)
            }
        } else{
            if(packages[x] !== ''){
                packageArr.push(`${x}${versionIdentifiers[bundler]}${packages[x]}`)
            }else {
                packageArr.push(`${x}`)
            }
        }
    }
    if(bundler === 'dotnet'){
        content = packageArr.join(" && ")
    }else {
        content += ` ${packageArr.join(" ")}`
    }
    return content
}