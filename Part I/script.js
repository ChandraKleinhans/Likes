// function likeButton(likeID) {
//     var targetLikeP = document.getElementById(`likes${likeID}`);
//     targetLikeP.innerHTML = parseInt(targetLikeP.innerHTML) + 1;
// }

function likeButton(likeID) {
    var targetLikeP = document.getElementById(`likeCount${likeID}`);
    targetLikeP.innerHTML = parseInt(targetLikeP.innerHTML) + 1;
}

// function incrementLikes()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
