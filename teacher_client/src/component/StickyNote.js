import ModalComp from "./Modal";

const StickyNote = ({content,date,id}) => {
    return(
        <div className="sticky-container">
            <div className="sticky-outer">
                <div className="sticky">
                <svg width="0" height="0">
                    <defs>
                    <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                        <path
                        d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                        strokeLinejoin="round"
                        strokeLinecap="square"
                        />
                    </clipPath>
                    </defs>
                </svg>
                <div className="sticky-content">
                    <div className="sticky-info-layout">
                        <div className="sticky-info">
                            <div className="sticky-info-head">Dear Anon,</div>
                            <div className="sticky-info-info">{content}</div>
                        </div>
                        <div className="sticky-info-footer">
                            <div>
                                <ModalComp content={content} date={date} id={id}/>
                            </div>
                            <div>- {date}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StickyNote;