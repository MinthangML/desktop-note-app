// // database.ts
// import * as fs from 'fs';
// import * as path from 'path';

// const dbPath: string = path.join(__dirname, 'data', 'notes.json');

// interface Note {
//   // Define the structure of a Note according to your data
//   id: string;
//   title: string;
//   content: string;
// }

// function readNotes(): Note[] {
//   try {
//     const data: string = fs.readFileSync(dbPath, 'utf-8');
//     return JSON.parse(data) as Note[];
//   } catch (error) {
//     return [];
//   }
// }

// function writeNotes(notes: Note[]): void {
//   try {
//     fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
//   } catch (error) {
//     console.error('Error writing to database:', error);
//   }
// }

// export { readNotes, writeNotes, Note };
