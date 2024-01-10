import { MouseEventHandler } from "react";

interface IDialogProps {
    closeModal: MouseEventHandler<HTMLButtonElement> | undefined;
}

function Dialog(props: IDialogProps) {

    return (
        <div className="relative z-10">
            <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen">
                <div className="flex min-h-full items-end justify-center p-4">
                    <div className="rounded-lg bg-white w-3/4 lg:w-2/3 h-[80dvh] lg:h-[90dvh] my-auto p-2 overflow-y-auto">

                        <div className="relative mb-2">
                            <img className="w-full h-64 object-cover object-center" src="/banners/overvoice-banner.png" alt="overvoice-banner-dialog" />
                            <button className="absolute top-0 right-0 w-10 h-10" onClick={props.closeModal} type="button">
                                <img src="close.png" alt="close-button" />
                            </button>
                        </div>
                        <h3 className="font-bold text-4xl">Title</h3>

                        <p>content</p>

                        <div>
                            special videos
                        </div>

                        <div className="flex flex-row gap-4">
                            <button className="rounded-md bg-slate-300 px-2 py-1">
                                <img className="w-8 h-8" src="/icons/code-icon.png" alt="source-code" />
                            </button>
                            <button className="rounded-md bg-primary px-4 text-white">
                                Visit Website
                            </button>
                            <button className="rounded-md bg-green-400 px-4 text-white">
                                Download
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dialog;