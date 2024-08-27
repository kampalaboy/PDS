import Link from 'next/link';
import Image from 'next/image';

export default function SysCategories() {
    return (
        <div className="flex justify-between items-center p-5 pt-20 w-full flex-col sm:flex-row">
            <div className="relative w-full sm:w-1/2 h-36 sm:h-72 overflow-hidden m-5 p-5">
                <Link href="PDS/scouts" className="block w-full h-full">
                    <div className="absolute inset-0 transition-transform transform hover:scale-110 hover:opacity-80">
                        <Image src="/assets/Scouts.jpg" alt="Scouts" className="w-full h-full object-cover" width={250} height={250}/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-green-500 text-4xl opacity-0 transition-opacity hover:opacity-100">
                            <p>Scouts</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="relative w-full sm:w-1/2 h-36 sm:h-72 overflow-hidden m-5 p-5">
                <Link href="PDS/matches" className="block w-full h-full">
                    <div className="absolute inset-0 transition-transform transform hover:scale-110 hover:opacity-80">
                        <Image src="/assets/Matches.jpg" alt="Matches" className="w-full h-full object-cover" width={250} height={250}/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-green-500 text-4xl opacity-0 transition-opacity hover:opacity-100">
                            <p>Matches</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="relative w-full sm:w-1/2 h-36 sm:h-72 overflow-hidden m-5 p-5">
                <Link href="PDS/players" className="block w-full h-full">
                    <div className="absolute inset-0 transition-transform transform hover:scale-110 hover:opacity-80">
                        <Image src="/assets/Players.png" alt="Players" className="w-full h-full object-cover" width={250} height={250}/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-green-500 text-4xl opacity-0 transition-opacity hover:opacity-100">
                            <p>Players</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
