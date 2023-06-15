// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  // Only change code below this line
  function updateRecords(records, id, prop, value) {

    if (value != "") {

      // ID that have prop
      if (records[id].hasOwnProperty(prop)) {
        
        if (prop == 'artist') {
          console.log("This is an artist")
        } 
        else if (prop == 'tracks') {
          console.log("This is a tracks ")
      } 
        else if (prop == 'albumTitle') {
        console.log("This is a albumTitle ")
    } 
    }
      // ID that not have prop 
      else if (prop == 'tracks') {
        console.log("This is not have an tracks")
      }
      else if (prop == 'artist') {
        console.log("This is not have an artist")
      } 
      else if (prop == 'albumTitle') {
        console.log("This is a albumTitle ")
      } 

    // Value == emtry
    else {
      console.log("what the hell ?")
      // delete id.prop
    }
    // return records;
    }
  }
  
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
updateRecords(recordCollection, 5439, 'albumTitle', '1')
