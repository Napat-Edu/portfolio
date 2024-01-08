interface ITimelineProps {
    title: string;
    description: string;
}

function Timeline(props: ITimelineProps) {

    return (
        <div className="relative sm:pl-10 py-6 group">
            <div className="
              flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden 
              before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px 
              before:bg-slate-300 sm:before:ml-4 before:self-start before:-translate-x-1/2 
              before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 
              after:bg-white after:border-4 after:box-content after:border-primary after:rounded-full 
              sm:after:ml-4 after:-translate-x-1/2 after:translate-y-1.5"
            >
                <div className="text-lg font-bold text-slate-900">{props.title}</div>
            </div>
            <div className="text-slate-500">{props.description}</div>
        </div>
    );
}

export default Timeline;