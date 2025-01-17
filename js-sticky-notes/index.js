const addNoteBtn = document.getElementById("add_note");
const deleteAllBtn = document.getElementById("delete_all");
const textArea = document.getElementById("text_area");
const notesContainer = document.getElementById("notes_container");
const colorPicker = document.getElementById("color");
const placeholderText = document.getElementById("para");

function createNote() {
  if (textArea.value.trim() === "") {
    alert("Please enter some text for the note.");
    return;
  }

  const noteDiv = document.createElement("div");
  const noteText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  noteText.textContent = textArea.value.trim();
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    noteDiv.remove();
    if (notesContainer.childElementCount === 0) {
      placeholderText.style.display = "block";
    }
  });

  noteDiv.style.backgroundColor = colorPicker.value;
  noteDiv.appendChild(noteText);
  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv);

  textArea.value = "";
  placeholderText.style.display = "none";
}

addNoteBtn.addEventListener("click", createNote);

deleteAllBtn.addEventListener("click", () => {
  notesContainer.innerHTML = "";
  placeholderText.style.display = "block";
});
