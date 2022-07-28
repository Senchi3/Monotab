const MidiWriter = require('midi-writer-js');
var MidiPlayer = require('midi-player-js');



const track = new MidiWriter.Track();

track.addEvent([
		new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
		new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
		new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
		new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
		new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
		new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
		new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
	], function(event, index) {
    return {sequential: true};
  }
);

const write = new MidiWriter.Writer(track);
console.log(write.dataUri('./test.mid'));



// Initialize player and register event handler
var Player = new MidiPlayer.Player(function(event) {
	console.log(event);
});

// Load a MIDI file
Player.loadFile(write.dataUri('./test.mid'));
Player.play();