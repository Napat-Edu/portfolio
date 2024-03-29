import { MouseEventHandler } from "react";
import { ICardLists } from "../items/CardList";

interface IDialogProps {
    closeModal: MouseEventHandler<HTMLButtonElement> | undefined;

    info: ICardLists;
}

function Dialog(props: IDialogProps) {
    const backgroundShade = ["bg-blue-400", "bg-purple-400"];

    return (
        <div className="relative z-10">
            <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen">
                <div className="flex min-h-full items-end justify-center p-4">
                    <div className="flex flex-col justify-between rounded-lg bg-white w-3/4 lg:w-2/3 h-[80dvh] lg:h-[85dvh] my-auto p-2 overflow-y-auto">

                        <div>
                            <div className="relative mb-2">
                                <img className="w-full h-64 object-cover object-center" src={props.info.bannerImage} alt="overvoice-banner-dialog" />
                                <button className="absolute top-1 right-1 w-10 h-10 bg-white rounded-full" onClick={props.closeModal} type="button">
                                    <img src="close.png" alt="close-button" />
                                </button>
                            </div>
                            <h3 className="font-bold text-4xl">{props.info.title}</h3>

                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: props.info.detail }}></p>

                            {
                                props.info.sampleVideos ?
                                    <div className="flex flex-row gap-2 mt-2">
                                        {
                                            props.info.sampleVideos.map((sampleVideo, idx) => {
                                                return (
                                                    <a className="bg-primary rounded-md px-2 py-1 text-white" href={sampleVideo} target="_blank" key={"sample-video-" + idx}>Sample Video {idx + 1}</a>
                                                );
                                            })
                                        }
                                    </div> :
                                    <></>
                            }
                        </div>

                        <div className="flex flex-row gap-4 mt-2">
                            {
                                props.info.sourceCode ?
                                    props.info.sourceCode.map((code, idx) => {
                                        return (
                                            <a key={"src-code-" + idx} href={code} target="_blank" className={`rounded-md ${backgroundShade[idx]} px-2 py-1`}>
                                                <img className="w-8 h-8" src="/icons/code-icon.png" alt="source-code" />
                                            </a>
                                        );
                                    })
                                    :
                                    <></>
                            }
                            {
                                props.info.webLink ?
                                    <a href={props.info.webLink} target="_blank" className="flex items-center rounded-md min-h-10 bg-primary px-4 text-white">
                                        <p>Visit Website</p>
                                    </a> :
                                    <></>
                            }
                            {
                                props.info.sourceFile ?
                                    <a href={props.info.sourceFile} target="_blank" className="flex items-center min-h-10 rounded-md bg-green-400 px-4 text-white">
                                        <p>Download</p>
                                    </a> :
                                    <></>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dialog;