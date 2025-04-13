import axios from 'axios';
import React, { createContext, useState } from 'react';
import { v4 as uuid, v4 } from 'uuid';
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const url = "http://localhost:8080"
    const [notes, setNotes] = useState([]);
    const [folder, setFolder] = useState([]);
    const [click, setClick] = useState("");
    const [activeFolderId, setActiveFolderId] = useState(null);
    const [isNewFolderCreated, setIsNewFolderCreated] = useState(false)



    function handleAddFolder() {

        const newFolder = {
            id: folder.length + 1,
            body: `Folder ${v4()}`,
            noteIds: [] // Store array of note IDs
        };
        setActiveFolderId(newFolder.id);
        setFolder([newFolder, ...folder]);
        setIsNewFolderCreated(true)
    }

    function handleAddNote() {
        if (activeFolderId === null) {
            alert("Please select a folder first to add a note.");
            return;
        }
        const newNote = {
            id: notes.length + 1,
            body: "New Note",
            lastModified: Date.now(),
            folderId: activeFolderId // Associate note with folder
        };
        setClick(newNote.id);
        setNotes([newNote, ...notes]);

        // Update folder with new note ID
        setFolder((prevFolders) =>
            prevFolders.map((folder) =>
                folder.id === activeFolderId
                    ? { ...folder, noteIds: [...folder.noteIds, newNote.id] }
                    : folder
            )
        );

        setIsNewFolderCreated(false)
    }

    function handleDelete(id) {
        const noteToDelete = notes.find(note => note.id === id);
        if (noteToDelete) {
            setNotes(notes.filter(note => note.id !== id));

            // Remove this note ID from the folder's noteIds array
            setFolder((prevFolders) =>
                prevFolders.map(folder =>
                    folder.id === noteToDelete.folderId
                        ? { ...folder, noteIds: folder.noteIds.filter(noteId => noteId !== id) }
                        : folder
                )
            );
        }
    }

    function handleDeleteFolder(folderId) {
        // Remove the specified folder from the folders array
        setFolder(prevFolders => prevFolders.filter(folder => folder.id !== folderId));
    
        // Remove all notes associated with this folder
        setNotes(prevNotes => prevNotes.filter(note => note.folderId !== folderId));
    }
    
    function getNotesForActiveFolder() {
        return notes.filter(note => note.folderId === activeFolderId);
    }

    function getActiveNote() {
        return notes.find(note => note.id === click);
    }

    function onUpdateNote(updatedNote) {
        const updatedNotesArray = notes.map(note => {
            if (note.id === click) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArray);
    }

    return (
        <StoreContext.Provider value={{ notes, setNotes, handleAddNote, handleDelete, click, setClick, getActiveNote, onUpdateNote, handleAddFolder, folder, setFolder, setActiveFolderId, getNotesForActiveFolder, activeFolderId, isNewFolderCreated, setIsNewFolderCreated, handleDeleteFolder}}>
            {children}
        </StoreContext.Provider>
    );
};


export default StoreProvider;
