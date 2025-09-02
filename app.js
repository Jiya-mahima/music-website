let masterPlay = document.getElementById('masterplay');
let posterMasterPlay = document.getElementById('poster_master_play');
let title = document.getElementById('tittle');
let audio = new Audio();
let seek = document.getElementById('seek');
let currentStart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentend');
let vol = document.getElementById('vol');
let volIcon = document.getElementById('vol_icon');
let volBar = document.querySelector('.vol_bar');
let volDot = document.getElementById('vol_dot');

// Playlist data
const songs = [{ id: 1, title: 'Medal', artist: 'Chandra Brar', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 2, title: 'Dekha Tenu', artist: 'Mohammad Faiz', file: 'audio/dekha tenu.mp3', image: 'image/hq720.jpg' },
    { id: 3, title: 'That Girl', artist: 'Amrinder Gill', file: 'audio/that girl.mp3', image: 'image/artworks-3C8fFP7WvQY1Frfz-gASliw-t500x500.jpg' },
    { id: 4, title: '90-90 Nabbe-Nabbe', artist: 'Gippy Grewal', file: 'audio/90-90.mp3', image: 'image/images.jpg' },
    { id: 5, title: 'Minna Minna', artist: 'Garry Sandhu', file: 'audio/minna minna.mp3', image: 'image/66278_4.jpg' },
    { id: 6, title: 'Aam Jahe Munde', artist: 'Parmish Verma', file: 'audio/aam jahe munda.mp3', image: 'image/Aam-Jahe-Munde.jpg' },
    { id: 7, title: 'Patt Lai Geya', artist: 'Jasmine Sandhu', file: 'audio/patt lai gya.mp3', image: 'image/Patt-Lai-Geya-Unknown-2020-20200715135511-500x500.jpg' },
    { id: 8, title: 'Laddu', artist: 'Jasmine Sandhu & Garry Sandhu', file: 'audio/laddu.mp3', image: 'image/size_m_1516708459.jpg' },
    { id: 9, title: 'Shape', artist: 'Kaka', file: 'audio/128-Shape - Another Side 128 Kbps.mp3', image: 'image/maxresdefault.jpg' },
    { id: 10, title: 'Farmaish', artist: 'Parmish Verma & Laddi Chahal', file: 'audio/farmish.mp3', image: 'image/Farmaish.jpg' },
    { id: 11, title: 'Dooriyan', artist: 'Guri', file: 'audio/song11.mp3', image: 'image/Dooriyan-Punjabi-2017-20220804044106-500x500.jpg' },
    { id: 12, title: 'medal', artist: 'chandra bra', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 13, title: 'kaka', artist: 'mankirat aulkha', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 14, title: 'paon ki jutti', artist: 'jyoti norram', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 15, title: 'sanjani', artist: 'arjit singh', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 16, title: 'heeriya', artist: 'arjit singh', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 17, title: 'lutt putt gya', artist: 'arjit singh', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 18, title: 'ikk number', artist: 'guru randawa', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' },
    { id: 19, title: 'mini copper', artist: 'ammy virk', file: 'audio/medal.mp3', image: 'image/8905285126686.jpg' }
    // ...your songs array here (no changes needed in the playlist)
];

const playButton = document.getElementById("playBtn");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pause"; // Change the button text to "Pause"
    } else {
        audioPlayer.pause();
        playButton.textContent = "Play"; // Change the button text to "Play"
    }
});
const followButton = document.getElementById("followBtn");

followButton.addEventListener("click", () => {
    if (followButton.textContent === "Follow") {
        followButton.textContent = "Following"; // Change button to "Following"
        followButton.style.backgroundColor = "#4CAF50"; // Green background when followed
        alert("You are now following this artist!");
    } else {
        followButton.textContent = "Follow"; // Change back to "Follow"
        followButton.style.backgroundColor = "#f44336"; // Red background for unfollowed
        alert("You unfollowed this artist.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Targeting the buttons by their IDs
    const discoverBtn = document.getElementById('discoverBtn');
    const myLibraryBtn = document.getElementById('myLibraryBtn');
    const radioBtn = document.getElementById('radioBtn');
    
    // Event listener for Discover button
    discoverBtn.addEventListener('click', function() {
        console.log('Discover button clicked');
        // You can replace this with any action, e.g., change content, show more items, etc.
        alert('Discover Section Clicked!');
    });

    // Event listener for MY LIBRARY button
    myLibraryBtn.addEventListener('click', function() {
        console.log('MY LIBRARY button clicked');
        // Add functionality for MY LIBRARY
        alert('MY LIBRARY Section Clicked!');
    });

    // Event listener for RADIO button
    radioBtn.addEventListener('click', function() {
        console.log('RADIO button clicked');
        // Add functionality for RADIO
        alert('RADIO Section Clicked!');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Targeting the buttons by their IDs
    const discoverBtn = document.getElementById('discoverBtn');
    const myLibraryBtn = document.getElementById('myLibraryBtn');
    const radioBtn = document.getElementById('radioBtn');
    const contentContainer = document.getElementById('content-container'); // Get content container

    // Event listener for Discover button
    document.addEventListener('DOMContentLoaded', function() {
        // Get buttons and content container
        const discoverBtn = document.getElementById('discoverBtn');
        const myLibraryBtn = document.getElementById('myLibraryBtn');
        const radioBtn = document.getElementById('radioBtn');
        const contentContainer = document.getElementById('content-container');
    
        // Event listener for Discover button
        discoverBtn.addEventListener('click', function() {
            console.log('Discover button clicked');
            
            // Change content for Discover
            contentContainer.innerHTML = `
                <h2>Discover New Music</h2>
                <p>Here you can find new songs, albums, and artists to explore.</p>
                <div class="discover-content">
                    <ul>
                        <li>Song 1: Amazing Song</li>
                        <li>Song 2: Another Hit</li>
                        <li>Artist: Cool Artist</li>
                    </ul>
                </div>
            `;
        });
    
        // Event listener for MY LIBRARY button
        myLibraryBtn.addEventListener('click', function() {
            console.log('MY LIBRARY button clicked');
            
            // Change content for MY LIBRARY
            contentContainer.innerHTML = `
                <h2>My Library</h2>
                <p>Explore your saved music and favorite artists in your personal library.</p>
            `;
        });
    
        // Event listener for RADIO button
        radioBtn.addEventListener('click', function() {
            console.log('RADIO button clicked');
            
            // Change content for RADIO
            contentContainer.innerHTML = `
                <h2>Radio Stations</h2>
                <p>Tune in to your favorite radio stations for non-stop music.</p>
                <div class="radio-stations">
                    <ul>
                        <li>Station 1: Pop Hits</li>
                        <li>Station 2: Rock Classics</li>
                        <li>Station 3: Chill Beats</li>
                    </ul>
                </div>
            `;
        });
    });
});    

document.addEventListener('DOMContentLoaded', () => {
    const playlistTab = document.querySelector('.playlist h4:nth-child(1)'); // Playlist tab
    const lastListeningTab = document.querySelector('.playlist h4:nth-child(2)'); // Last Listening tab
    const recommendingTab = document.querySelector('.playlist h4:nth-child(3)'); // Recommendation tab
    const songItems = document.querySelectorAll('.songitem'); // All songs in the playlist

    // Function to add the 'active' class to the selected tab
    function activateTab(tab) {
        // Remove 'active' class from all tabs
        document.querySelectorAll('.playlist h4').forEach(tab => tab.classList.remove('active'));
        // Add the 'active' class to the clicked tab
        tab.classList.add('active');
    }

    // Event listener for Playlist tab
    playlistTab.addEventListener('click', () => {
        activateTab(playlistTab);
        // Add any additional logic for when Playlist tab is clicked
    });

    // Event listener for Last Listening tab
    lastListeningTab.addEventListener('click', () => {
        activateTab(lastListeningTab);
        // Highlight last listened song (optional)
        songItems.forEach(item => item.classList.remove('last-listened'));
        const lastListenedSongId = localStorage.getItem('lastListenedSongId');
        if (lastListenedSongId) {
            const lastSongItem = document.getElementById(lastListenedSongId);
            if (lastSongItem) {
                lastSongItem.classList.add('last-listened');
            }
        }
    });

    // Event listener for Recommendation tab
    recommendingTab.addEventListener('click', () => {
        activateTab(recommendingTab);
        // Add any additional logic for when Recommendations tab is clicked
    });

    // Play song logic (add for all songs in the playlist)
    songItems.forEach(item => {
        item.querySelector('.bi-play-circle').addEventListener('click', function () {
            const songId = item.querySelector('.bi-play-circle').id;
            localStorage.setItem('lastListenedSongId', songId); // Store in localStorage
            songItems.forEach(song => song.classList.remove('last-listened')); // Remove highlight from all songs
            item.classList.add('last-listened'); // Highlight the current song
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const playlistTab = document.querySelector('.playlist h4:nth-child(1)'); // Playlist tab
    const lastListeningTab = document.querySelector('.playlist h4:nth-child(2)'); // Last Listening tab
    const recommendingTab = document.querySelector('.playlist h4:nth-child(3)'); // Recommendation tab
    const songItems = document.querySelectorAll('.songitem'); // All songs in the playlist

    // Function to add the 'active' class to the selected tab
    function activateTab(tab) {
        // Remove 'active' class from all tabs
        document.querySelectorAll('.playlist h4').forEach(tab => tab.classList.remove('active'));
        // Add the 'active' class to the clicked tab
        tab.classList.add('active');
    }

    // Function to store last listened songs in localStorage
    function updateLastListenedSongs(songId) {
        // Get the current list of last listened songs from localStorage
        let lastListenedSongs = JSON.parse(localStorage.getItem('lastListenedSongs')) || [];
        
        // If the songId is not already in the list, add it to the beginning of the list
        if (!lastListenedSongs.includes(songId)) {
            lastListenedSongs.unshift(songId);
        }
        
        // Ensure that only the last 2 songs are stored
        if (lastListenedSongs.length > 2) {
            lastListenedSongs.pop();
        }
        
        // Save the updated list back to localStorage
        localStorage.setItem('lastListenedSongs', JSON.stringify(lastListenedSongs));
    }

    // Event listener for Playlist tab
    playlistTab.addEventListener('click', () => {
        activateTab(playlistTab);
        // Add any additional logic for when Playlist tab is clicked
    });

    // Event listener for Last Listening tab
    lastListeningTab.addEventListener('click', () => {
        activateTab(lastListeningTab);

        // Highlight the last two listened songs
        const lastListenedSongs = JSON.parse(localStorage.getItem('lastListenedSongs')) || [];
        
        songItems.forEach(item => {
            const songId = item.querySelector('.bi-play-circle').id;
            item.classList.remove('last-listened'); // Remove highlight from all songs

            // Highlight the last listened songs
            if (lastListenedSongs.includes(songId)) {
                item.classList.add('last-listened');
            }
        });
    });

    // Event listener for Recommendation tab
    recommendingTab.addEventListener('click', () => {
        activateTab(recommendingTab);
        // Add any additional logic for when Recommendations tab is clicked
    });

    // Play song logic (add for all songs in the playlist)
    songItems.forEach(item => {
        item.querySelector('.bi-play-circle').addEventListener('click', function () {
            const songId = item.querySelector('.bi-play-circle').id;

            // Update last listened songs in localStorage
            updateLastListenedSongs(songId);

            // Highlight the current song in the playlist
            songItems.forEach(song => song.classList.remove('last-listened'));
            item.classList.add('last-listened');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const playlistTab = document.querySelector('.playlist h4:nth-child(1)'); // Playlist tab
    const lastListeningTab = document.querySelector('.playlist h4:nth-child(2)'); // Last Listening tab
    const recommendingTab = document.querySelector('.playlist h4:nth-child(3)'); // Recommendation tab
    const songItems = document.querySelectorAll('.songitem'); // All songs in the playlist
    const searchInput = document.querySelector('.serach input'); // Search input field
    const noResultsMessage = document.createElement('div'); // Message for no results found
    noResultsMessage.textContent = "No results found";
    noResultsMessage.style.color = 'red';
    noResultsMessage.style.display = 'none'; // Hidden by default

    // Insert the no-results message into the playlist container
    document.querySelector('.menu_song').appendChild(noResultsMessage);

    // Function to add the 'active' class to the selected tab
    function activateTab(tab) {
        document.querySelectorAll('.playlist h4').forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
    }

    // Event listener for Playlist tab
    playlistTab.addEventListener('click', () => {
        activateTab(playlistTab);
    });

    // Event listener for Last Listening tab
    lastListeningTab.addEventListener('click', () => {
        activateTab(lastListeningTab);
        const lastListenedSongs = JSON.parse(localStorage.getItem('lastListenedSongs')) || [];
        songItems.forEach(item => {
            const songId = item.querySelector('.bi-play-circle').id;
            item.classList.remove('last-listened');
            if (lastListenedSongs.includes(songId)) {
                item.classList.add('last-listened');
            }
        });
    });

    // Event listener for Recommendation tab
    recommendingTab.addEventListener('click', () => {
        activateTab(recommendingTab);
    });

    // Function to handle search functionality
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        let matchFound = false;

        songItems.forEach(item => {
            const songTitle = item.querySelector('h5').textContent.toLowerCase();
            if (songTitle.includes(query)) {
                item.style.display = 'block'; // Show song item if it matches the query
                matchFound = true;
            } else {
                item.style.display = 'none'; // Hide song item if it doesn't match the query
            }
        });

        // Display the "No results found" message if no song matches the query
        if (!matchFound && query !== '') {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });

    // Play song logic (add for all songs in the playlist)
    songItems.forEach(item => {
        item.querySelector('.bi-play-circle').addEventListener('click', function () {
            const songId = item.querySelector('.bi-play-circle').id;
            updateLastListenedSongs(songId);
            songItems.forEach(song => song.classList.remove('last-listened'));
            item.classList.add('last-listened');
        });
    });

    // Function to store last listened songs in localStorage
    function updateLastListenedSongs(songId) {
        let lastListenedSongs = JSON.parse(localStorage.getItem('lastListenedSongs')) || [];
        if (!lastListenedSongs.includes(songId)) {
            lastListenedSongs.unshift(songId);
        }
        if (lastListenedSongs.length > 2) {
            lastListenedSongs.pop();
        }
        localStorage.setItem('lastListenedSongs', JSON.stringify(lastListenedSongs));
    }
});

// Play button event listeners
document.querySelectorAll('.playlistplay').forEach(item => {
    item.addEventListener('click', (e) => {
        let songId = e.target.id;  // Get the song ID from the clicked button
        let song = songs.find(s => s.id == songId);  // Find the song data by ID

        if (audio.src !== song.file) {
            audio.src = song.file;  // Update the audio source
            audio.play();  // Play the new song
            posterMasterPlay.src = song.image;  // Change the poster image
            title.innerHTML = `${song.title}<br><div class="subtitle">${song.artist}</div>`;  // Update the song title and artist
        } else {
            audio.play();  // If the song is already playing, just resume it
        }
        masterPlay.classList.replace('bi-play-circle', 'bi-pause-circle');  // Change the play icon to pause
    });
});

// Handle the play/pause toggle for the master play button
let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();  // Play the audio if paused
        setTimeout(() => {
            wave.classList.add('active1'); // Add the active class to trigger the wave animation
        }, 50);  // Small delay to ensure audio starts and animation can trigger
        masterplay.classList.remove('bi-pause-circle-fill');
        masterplay.classList.add(' bi-pause-circle-fill');
    } else {
        audio.pause();  // Pause the audio if playing
        wave.classList.remove('active1');  // Remove the animation class when pausing
        masterplay.classList.add('bi-pause-circle-fill');
        masterplay.classList.remove(' bi-pause-circle-fill');
    }
}); 

const makeAllBackground = () => {
    // Reset the background color for all song items
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = '#0c0c0c'; // Corrected background color
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    let music = new Audio();  // Create a new Audio object for the music
    let poster_master_play = document.getElementById('poster_master_play');
    let title = document.getElementById('title');
    let subtitle = document.querySelector('.subtitle');  // Selecting the subtitle (artist)
    let masterplay = document.getElementById('masterplay');

    // Song data
    const songs = [
        { id: 1, songName: 'Vande Matram', artist: 'Bankim Chandra', file: 'audio/1.mp3', image: 'img/1.jpg' },
        { id: 2, songName: 'Song 2', artist: 'Artist 2', file: 'audio/2.mp3', image: 'img/2.jpg' },
        // Add other songs as needed
    ];

    // Playlist event listeners
    Array.from(document.getElementsByClassName('playlist')).forEach((e) => {
        e.addEventListener('click', (event) => {
            index = parseInt(event.target.id);  // Get the ID of the clicked song as a number

            // Find the song object by matching the ID
            let selectedSong = songs.find(song => song.id === index);  // Find the song by its ID
            if (selectedSong) {
                // Set the audio source to the selected song
                music.src = selectedSong.file;

                // Set the poster image for the song
                poster_master_play.src = selectedSong.image;

                // Play the music
                music.play();

                // Update the play/pause button (assuming it's a pause button at this point)
                masterplay.classList.add('bi-pause-circle');
                masterplay.classList.remove('bi-play-circle');

                // Update the title and artist in the HTML
                title.innerHTML = selectedSong.songName;
                subtitle.innerHTML = selectedSong.artist;
            } else {
                console.error('Song not found!');
            }

            // Reset all song item backgrounds and highlight the selected song
            makeAllBackground();
            if (Array.from(document.getElementsByClassName('songitem'))[index]) {
                Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = '#0c0c0c';  // Highlight the selected song item
            }
        });
    });
});


    // Optionally add play/pause toggle functionality to the masterplay button
    masterplay.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            masterplay.classList.add('bi-pause-circle');
            masterplay.classList.remove('bi-play-circle');
        } else {
            music.pause();
            masterplay.classList.add('bi-play-circle');
            masterplay.classList.remove('bi-pause-circle');
        }
    });


// Update the seek bar and time display
audio.addEventListener('timeupdate', () => {
    let currentTime = audio.currentTime;
    let duration = audio.duration;

    let seekPosition = (currentTime / duration) * 100;
    seek.value = seekPosition;

    currentStart.textContent = formatTime(currentTime);
    currentEnd.textContent = formatTime(duration);
});

// Seek bar change event
seek.addEventListener('input', () => {
    let seekPosition = seek.value;
    audio.currentTime = (seekPosition / 100) * audio.duration;
});

// Volume control
vol.addEventListener('input', () => {
    audio.volume = vol.value / 100;
    volBar.style.width = vol.value + '%';
    volDot.style.left = vol.value + '%';
});

// Format time function (converts seconds to minutes:seconds format)
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

document.querySelector('.icon').addEventListener('click', function(event) {
    if (event.target.classList.contains('bi-skip-start-fill')) {
        const audio = document.getElementById("audio");
        audio.currentTime = 0;
        console.log("Audio skipped to start");
    }
    // Add other conditions for other buttons
});


document.addEventListener('DOMContentLoaded', () => {
    let pop_song = document.getElementById('pop_song');
    let pop_song_right = document.getElementById('pop_song_right');
    let pop_song_left = document.getElementById('pop_song_left');
    let artist_bx = document.getElementById('artist_bx');
    let pop_art_right = document.getElementById('pop_art_right');
    let pop_art_left = document.getElementById('pop_art_left');
    
    pop_song_right.addEventListener('click', () => {
        console.log('Right Button for Songs Clicked');
        if (pop_song) {
            pop_song.scrollLeft += 330;
        }
    });

    pop_song_left.addEventListener('click', () => {
        console.log('Left Button for Songs Clicked');
        if (pop_song) {
            pop_song.scrollLeft -= 330;
        }
    });

    pop_art_right.addEventListener('click', () => {
        console.log('Right Button for Artists Clicked');
        if (artist_bx) {
            artist_bx.scrollLeft += 330;
        }
    });

    pop_art_left.addEventListener('click', () => {
        console.log('Left Button for Artists Clicked');
        if (artist_bx) {
            artist_bx.scrollLeft -= 330;
        }
    });
});