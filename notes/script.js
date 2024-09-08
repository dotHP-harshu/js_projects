const addBtn = document.getElementById("add-btn");
const container = document.getElementById("container");

// Function to add notes
const addNote = (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = ` <div class="tool">
  <i class="fa-regular fa-floppy-disk save-btn"></i>
  <i class="fa-solid fa-trash delete-btn" ></i>
</div>
<textarea  placeholder="Type something ....">${text}</textarea>`;
  container.append(note);

  // Event on delete
  note.querySelector(".delete-btn").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save-btn").addEventListener("click", () => {
    saveNotes();
  });
};

// function to save notes
const saveNotes = () => {
  const data = [];
  const noteData = document.querySelectorAll(".note textarea");
  noteData.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addBtn.addEventListener("click", () => {
  addNote();
  saveNotes();
});

(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    localStorage.removeItem("notes");
  } else {
    lsNotes.forEach((note) => {
      addNote(note);
    });
  }
})();
