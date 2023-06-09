var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');
var isZoomed = false;

function openModal(imageUrl) {
  modalImage.src = imageUrl;
  modal.style.display = 'block';
  toggleZoom();
}

function toggleZoom() {
  if (isZoomed) {
    modalImage.style.transform = 'scale(1)';
  } else {
    modalImage.style.transform = 'scale(1.2)';
  }
  isZoomed = !isZoomed;
}

function closeModal() {
  modal.style.display = 'none';
  modalImage.style.transform = 'scale(1)';
}



var paragraph = document.getElementById('zoom-paragraph');
var fontSize = 16;

function zoomIn() {
  fontSize += 10;
  paragraph.style.fontSize = fontSize + 'px';
}

function zoomOut() {
  fontSize -= 10;
  if (fontSize < 0) {
    fontSize = 0;
  }
  paragraph.style.fontSize = fontSize + 'px';
}

  
