/* ========================================
   LIGHTER - Toggle between closed and open
======================================== */
const lighter = document.getElementById('lighter');
let lighterOpen = false;

lighter.addEventListener('click', () => {
  lighterOpen = !lighterOpen;
  if (lighterOpen) {
    lighter.src = 'assets/images/lighter-open.png';
  } else {
    lighter.src = 'assets/images/lighter-closed.png';
  }
  console.log('Lighter clicked:', lighterOpen);
});

/* ========================================
   ENVELOPE - Open letter modal
======================================== */
const envelope = document.getElementById('envelope');
const letterModal = document.getElementById('letterModal');
const letterContent = document.getElementById('letterContent');
let envelopeOpen = false;

envelope.addEventListener('click', (e) => {
  e.stopPropagation();
  envelopeOpen = !envelopeOpen;
  
  if (envelopeOpen) {
    envelope.src = 'assets/images/envelope-open.png';
    letterModal.classList.add('show');
  } else {
    envelope.src = 'assets/images/envelope-closed.png';
    letterModal.classList.remove('show');
  }
  console.log('Envelope clicked:', envelopeOpen);
});

// Close letter when clicking on it
letterContent.addEventListener('click', () => {
  envelopeOpen = false;
  envelope.src = 'assets/images/envelope-closed.png';
  letterModal.classList.remove('show');
});

// Close letter when clicking outside
letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) {
    envelopeOpen = false;
    envelope.src = 'assets/images/envelope-closed.png';
    letterModal.classList.remove('show');
  }
});

/* ========================================
   CAMERA - Photo gallery modal
======================================== */
const camera = document.getElementById('camera');
const cameraModal = document.getElementById('cameraModal');
const photoDisplay = document.getElementById('photoDisplay');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const closeCam = document.getElementById('closeCam');

const photos = [
  'assets/photos/1.jpeg',
  'assets/photos/2.jpeg',
  'assets/photos/3.jpeg',
  'assets/photos/4.jpeg',
  'assets/photos/5.jpeg'
];

let currentPhotoIndex = 0;

// Open camera modal
camera.addEventListener('click', () => {
  console.log('Camera clicked');
  cameraModal.classList.add('show');
  photoDisplay.src = photos[currentPhotoIndex];
  console.log('Displaying photo:', photos[currentPhotoIndex]);
  console.log('Photo display element:', photoDisplay);
});

// Close camera modal
closeCam.addEventListener('click', () => {
  console.log('Close camera clicked');
  cameraModal.classList.remove('show');
});

cameraModal.addEventListener('click', (e) => {
  if (e.target === cameraModal) {
    cameraModal.classList.remove('show');
  }
});

// Navigate photos
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  photoDisplay.src = photos[currentPhotoIndex];
  console.log('Next photo:', currentPhotoIndex, photos[currentPhotoIndex]);
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  photoDisplay.src = photos[currentPhotoIndex];
  console.log('Prev photo:', currentPhotoIndex, photos[currentPhotoIndex]);
});

/* ========================================
   KISS - Create floating kiss animations
======================================== */
const kissBtn = document.getElementById('kissBtn');

kissBtn.addEventListener('click', (e) => {
  console.log('Kiss clicked');
  // Create 3 kisses
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const kiss = document.createElement('img');
      kiss.src = 'assets/images/kiss.png';
      kiss.className = 'kiss-pop';
      
      // Random size between 50-100px
      const size = 50 + Math.random() * 50;
      kiss.style.width = size + 'px';
      kiss.style.height = 'auto';
      
      // Position near the click with some randomness
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;
      kiss.style.left = (e.pageX + offsetX) + 'px';
      kiss.style.top = (e.pageY + offsetY) + 'px';
      
      document.body.appendChild(kiss);
      
      // Remove after animation completes (3 seconds)
      setTimeout(() => {
        kiss.remove();
      }, 3000);
    }, i * 150); // Stagger the appearance
  }
});

/* ========================================
   LOCKET - Toggle between closed and open
======================================== */
const locket = document.getElementById('locket');
let locketOpen = false;

locket.addEventListener('click', () => {
  locketOpen = !locketOpen;
  if (locketOpen) {
    locket.src = 'assets/images/locket-open.png';
  } else {
    locket.src = 'assets/images/locket-closed.png';
  }
  console.log('Locket clicked:', locketOpen);
});

/* ========================================
   CATS - Toggle between apart and kissing
======================================== */
const cats = document.getElementById('cats');
let catsKissing = false;

cats.addEventListener('click', () => {
  catsKissing = !catsKissing;
  if (catsKissing) {
    cats.src = 'assets/images/cats-kissing.png';
  } else {
    cats.src = 'assets/images/cats-apart.png';
  }
  console.log('Cats clicked:', catsKissing);
});

/* ========================================
   LIGHTS - Toggle pink glow outline
======================================== */
const lights = document.getElementById('lights');
const pinkOverlay = document.getElementById('pinkOverlay');
let lightsOn = false;

lights.addEventListener('click', () => {
  lightsOn = !lightsOn;
  if (lightsOn) {
    lights.classList.add('glow');
  } else {
    lights.classList.remove('glow');
  }
  console.log('Lights clicked:', lightsOn);
});

/* ========================================
   MUSIC PLAYER - Full functionality
======================================== */
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const vinyl = document.getElementById('vinyl');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Format time as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Play button
playBtn.addEventListener('click', () => {
  audio.play();
  vinyl.classList.add('playing');
});

// Pause button
pauseBtn.addEventListener('click', () => {
  audio.pause();
  vinyl.classList.remove('playing');
});

// Stop button
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  vinyl.classList.remove('playing');
  progressBar.value = 0;
});

// Update progress bar as song plays
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percentage;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
  }
});

// Set duration when metadata loads
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

// Seek when clicking on progress bar
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// When song ends, stop vinyl spinning
audio.addEventListener('ended', () => {
  vinyl.classList.remove('playing');
  progressBar.value = 0;
});
