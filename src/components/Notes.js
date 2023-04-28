import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  let Navigate=useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
       //eslint-disable-next-line
    }
    else{
      Navigate('/login')
    }
     
  }, [Navigate, getNotes]);
  
const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: "default"})
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };
  const ref = useRef(null);
  const refClose=useRef(null)
  const handleClick = (e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Note Updated Successfully","success")

}


const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
  return (
    <>
      <AddNote showAlert={props.showAlert} /> 
      <button className="d-none"
        ref={ref}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              Edit Note{" "}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      onChange={onChange} value={note.etitle} minLength={5} required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      onChange={onChange} value={note.edescription} minLength={5} required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      onChange={onChange} value={note.etag} minLength={5} required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length<5 || note.edescription.length<5}>
               Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className='container mx-2'>
        {notes.length===0 && "No Notes to display"}</div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
