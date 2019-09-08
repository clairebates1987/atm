export const distributeNotes = (amount, notes) => {
  const remainingAmount = amount;
  const withdrawal = notes.reduce((acc, note) => {
    console.log(note);
    let noOfCurrentNoteRequired;

    if (remainingAmount % note.value === 0)
      noOfCurrentNoteRequired = remainingAmount / note.value;

    console.log(noOfCurrentNoteRequired);
    console.log(note.numberAvailable);

    //if (noOfCurrentNoteRequired <= note.numberAvailable) note;

    //return acc.push(note);
  }, []);
};
