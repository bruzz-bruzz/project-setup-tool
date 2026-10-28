import './App.css'
export default function Guide() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">How to Add Your Script to PATH</h1>
      <p className="mb-4 text-gray-600">
        Follow these steps to ensure your script can be run from any command prompt window:
      </p>
      <ol className="list-decimal list-inside space-y-4 text-gray-700">
        <li>Open the Start menu, search for <span className="font-mono bg-gray-100 p-1 rounded">"env"</span>, and select <span className="font-semibold text-blue-600">"Edit the system environment variables"</span>.</li>
        <li>In the System Properties window, click the <span className="font-semibold text-blue-600">"Environment Variables..."</span> button.</li>
        <li>Under <span className="font-semibold">"User variables"</span> or <span className="font-semibold">"System variables"</span>, select the <span className="font-mono bg-gray-100 p-1 rounded">Path</span> variable and click <span className="font-semibold text-blue-600">"Edit..."</span>.</li>
        <li>Click <span className="font-semibold text-blue-600">"New"</span> and paste the full directory path where your <span className="font-mono bg-gray-100 p-1 rounded">.bat</span> file is saved.</li>
        <li>Click <span className="font-semibold text-blue-600">"OK"</span> on all open dialog windows to save your changes.</li>
        <li>Restart any open command prompt or terminal windows for the changes to take effect.</li>
      </ol>
      <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded">
        <p className="font-semibold">Pro tip:</p>
        <p className="text-sm">You can verify it works by opening a new terminal and typing the name of your batch file.</p>
      </div>
      <p><a href='/' className='text-blue-500 underline'>Make one now!</a></p>
    </div>
  );
}
