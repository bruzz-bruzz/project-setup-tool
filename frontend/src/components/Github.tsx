import './App.css'
type Data = {
    repo:string
}
export default function Github({repo}:Data){
    return (
        <div className='mt-8 pt-6 border-t border-gray-200 text-center text-gray-600'>
            <p className="text-sm">Made by <a href='https://github.com/bruzz-bruzz' className='font-semibold text-blue-600 hover:text-blue-800' target="_blank" rel="noopener noreferrer">bruzz-bruzz</a></p>
            <div className="flex gap-4 justify-center mt-2">
                <a href='https://github.com/bruzz-bruzz' className='text-sm text-gray-500 hover:text-blue-600' target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                <a href={`${repo}`} className='text-sm text-gray-500 hover:text-blue-600' target="_blank" rel="noopener noreferrer">View Repository</a>
            </div>
        </div>
    )
}