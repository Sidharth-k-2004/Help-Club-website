const StickyNoteSkeleton = () => {
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
                        <div className="ske-container">
                            <div style={{width:'100%'}}>
                                <div style={{width:'100%'}}>
                                    <div className="skeleton">
                                        <div className="square ske1"></div>
                                    </div>
                                </div>
                                <div style={{width:'100%'}}>
                                    <div className="skeleton">
                                        <div className="square ske2"></div>
                                        <div className="square ske2"></div>
                                        <div className="square ske2"></div>
                                        <div className="square ske2"></div>
                                        <div className="square ske2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ske-footer">
                                <div>
                                    <div className="skeleton">
                                        <div className="square ske3"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="skeleton">
                                        <div className="square ske4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyNoteSkeleton;