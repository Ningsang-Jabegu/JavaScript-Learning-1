const addButton = document.querySelector("#add");
const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmlData = `
    <div class="operation">
    <button class="edit">
        <i class="fa-solid fa-edit"></i>
    </button>
    <button class="delete">
        <i class="fa-solid fa-trash-alt"></i>
    </button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;
  // console.log(note.insertAdjacentHTML('afterbegin',htmlData));
  note.insertAdjacentHTML("afterbegin", htmlData);
  // console.log(note);

  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // deleting the node
  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData()
  });

  // toggle using edit icon
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    // input will produce another log
    const value = event.target.value;
    mainDiv.innerHTML = value;
    // console.log(mainDiv);

    // using local storage data
    updateLSData()
  });
  // // append means to add sth in body
  // append => after and prepend => before
  document.body.appendChild(note);
};

// getting data back from local Storage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes) { notes.forEach((note) => addNewNote(note))}

addButton.addEventListener("click", () => addNewNote());
