
const client_id = 'f5f73fd19dd44574b203bbb0896fb626'; 
const client_secret = '87dc6550336b40dabe03fd6ca21197cf';

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
    },
  });

  return await response.json();
}

async function getToptracks(access_token) {
    const response = await fetch("https://api.spotify.com/v1/artists/4oLeXFyACqeem2VImYeBFe/top-tracks?market=ES", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }

getToken().then(response => {
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo").textContent = tracks.tracks[0].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo2").textContent = tracks.tracks[1].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo3").textContent = tracks.tracks[2].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo4").textContent = tracks.tracks[3].name;
  })
  getToptracks(response.access_token).then(tracks => {
    console.log(tracks)
    document.getElementById("trackinfo5").textContent = tracks.tracks[4].name;
  })
});
