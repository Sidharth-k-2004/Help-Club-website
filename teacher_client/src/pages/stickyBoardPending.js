import { useEffect, useState } from "react";
import StickyNote from "../component/StickyNote";
import StickyNoteSkeleton from "../component/StickyNoteSkeleton";
import { useNavigate } from "react-router-dom";

const StickyBoardPending = () => {
    const [notes, setNotes] = useState(null);
    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const toggle_replied = () => {
        navigate("/board/replied");
    };

    const toggle_pending = () => {
        navigate("/board/pending");
    };

    useEffect(() => {
        const get_notes = async () => {
            try {
                const response = await fetch('http://localhost:8080/data', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!response.ok) {
                    console.log("Unable to get notes");
                    return;
                }

                const data = await response.json();
                console.log(data);
                setNotes(data);
            } catch (error) {
                console.log("Error in fetching notes: ", error);
            }
        };
        get_notes();
    }, []);

    return (
        <div className="board-container">
            <div className="board-heading">H.E.L.P Board</div>
            <div className="center-container">
                <div className="toggle">
                    <div id="replied1" onClick={toggle_replied}>
                        Replied
                    </div>
                    <div id="pending1" onClick={toggle_pending}>
                        Pending
                    </div>
                </div>
                <div className="board-layout">
                    {notes ? (
                        notes.length === 0 ? (
                            <div className="no-res-container">
                                <div className="no-res-layout">
                                    All Queries Read !!
                                </div>
                                <div className="no-res-layout">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-x">
                                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                        <path d="m15 11-6 6" />
                                        <path d="m9 11 6 6" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            notes.map((note) => (
                                <StickyNote
                                    key={note.mssg_id}
                                    id={note.mssg_id}
                                    content={note.mssg}
                                    date={note.created_on}
                                />
                            ))
                        )
                    ) : (
                        [...Array(4)].map((_, index) => (
                            <StickyNoteSkeleton key={index} />
                        ))
                    )}
                </div>
            </div>
            <div className="site-footer">
                <div>Made with 💖 by H.E.L.P</div>
                <div>2024 &#169; H.E.L.P</div>
            </div>
        </div>
    );
};

export default StickyBoardPending;
