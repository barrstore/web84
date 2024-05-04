export default function Widget() {
    return (
        <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Memories Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                <img src="https://placehold.co/400x300" alt="Photo 1" className="w-full h-48 object-cover">
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Memorable Moment 1</h2>
                    <p className="text-sm">Description of the first memorable moment.</p>
                </div>
            </div>
            
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                <img src="https://placehold.co/400x300" alt="Photo 2" className="w-full h-48 object-cover">
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Memorable Moment 2</h2>
                    <p className="text-sm">Description of the second memorable moment.</p>
                </div>
            </div>
            
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                <img src="https://placehold.co/400x300" alt="Photo 3" className="w-full h-48 object-cover">
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Memorable Moment 3</h2>
                    <p className="text-sm">Description of the third memorable moment.</p>
                </div>
            </div>
        </div>
        </div>
    )
              }
