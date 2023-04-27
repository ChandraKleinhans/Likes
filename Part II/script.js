function likeClick(likeID) {
    var targetLikeP = document.getElementById(`like-count${likeID}`);
    targetLikeP.innerHTML = parseInt(targetLikeP.innerHTML) + 1;
}