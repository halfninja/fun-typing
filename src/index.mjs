// @ts-check

/**
 * @param {any[]} args
 */
function log(...args) {
    console.log('🍓', ...args);
}

log('Welcome');

// TODO split these into sections
const emoji = [
'💖', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '💕', '💞', '💓', '💗', '💘', '💝', '💟', 
'😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '🥱', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '🥴', '😠', '😡', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🥳', '🥺', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐱', '🐱', '💻', '🐱', 
'🙈', '🙉', '🙊', '🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🦒', '🦊', '🦝', '🐮', '🐷', '🐗', '🐭', '🐹', '🐰', '🐻', '🐨', '🐼', '🐸', '🦓', '🐴', '🦄', '🐔', '🐲', '🐽', '🐾', '🐒', '🦍', '🦧', '🦮', '🐕', '🦺', '🐩', '🐕', '🐈', '🐅', '🐆', '🐎', '🦌', '🦏', '🦛', '🐂', '🐃', '🐄', '🐖', '🐏', '🐑', '🐐', '🐪', '🐫', '🦙', '🦘', '🦥', '🦨', '🦡', '🐘', '🐁', '🐀', '🦔', '🐇', '🐿', '🦎', '🐊', '🐢', '🐍', '🐉', '🦕', '🦖', '🦦', '🦈', '🐬', '🐳', '🐋', '🐟', '🐠', '🐡', '🦐', '🦑', '🐙', '🦞', '🦀', '🐚', '🦆', '🐓', '🦃', '🦅', '🕊', '🦢', '🦜', '🦩', '🦚', '🦉', '🐦', '🐧', '🐥', '🐤', '🐣', '🦇', '🦋', '🐌', '🐛', '🦟', '🦗', '🐜', '🐝', '🐞', '🦠', '🧞', '👀', '🦴', '🦷', '👅', '👄', '🧠', '🦾', '🦿', '👣', '🤺', '⛷',
'💌', '💥', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫', '⬛', '⬜', '◼', '◻', '◾', '◽', '▪', '▫', '🔶', '🔸', '🔷', '🔹', '🔺', '🔻', '🔲', '🔳', '💭', '🗯', '💬', '🗨', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧',
'👩🏾‍🤝‍👩🏻','👩🏿‍🤝‍👩🏿','👩🏻‍🤝‍🧑🏼','👩🏾‍🤝‍🧑🏽','👨🏾‍🤝‍👨🏻','👨🏿‍🤝‍👨🏾',
'👩🏾','👨🏾','🧑🏾','👧🏾','👦🏾','🧒🏾','👶🏾','👵🏾','👴🏾','🧓🏾','👱🏾‍♀️','👱🏾‍♂️','👸🏾','🤴🏾','🤶🏾','🎅🏾','👮🏾‍♀️','👮🏾‍♂️','🕵🏾‍♀️','🕵🏾‍♂️','💂🏾‍♀️','💂🏾‍♂️','💂🏾‍♂️','👷🏾‍♀️','👷🏾‍♂️','👩🏾‍⚕️','👨🏾‍⚕️','👩🏾‍🎓','👩🏾‍🏫','👩🏾‍⚖️','👩🏾‍🌾','👩🏾‍🍳','👩🏾‍🔧','👩🏾‍🏭','👩🏾‍🔬','👩🏾‍💻','👩🏾‍🎤','👩🏾‍🎨','👩🏾‍✈️','👩🏾‍🚀','👩🏾‍🚒','🧕🏾','👰🏾','🤵🏾','🤱🏾','🦸🏾‍♀️','🦹🏾‍♀️','🧙🏾‍♀️','🧜🏾‍♀️','👩🏾‍🦽','💃🏾',
];
 
const typingZone = document.getElementById('typing-zone');

/**
 * @param {string} text
 */
function typeText(text) {
    typingZone.focus();
    const range = getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    range.collapse(false);
}

function onClickEmoji(event) {
    event.stopPropagation();
    const button = event.target;
    typeText(button.innerText);
    typingZone.focus();
}

function populateEmojiPicker() {
    const picker = document.getElementById('emoji-selector');
    emoji.forEach(emote => {
        const button = document.createElement('button');
        button.textContent = emote;
        picker.appendChild(button);
        button.addEventListener('click', onClickEmoji, {
            passive: true,
        });
    });
}

populateEmojiPicker();
typingZone.focus();

// Fullscreen mode seems to mess with how text selections work in Chrome -
// emoji get inserted at the start of the document instead of where the cursor
// had been.
// document.addEventListener('click', function() {
//     document.body.requestFullscreen({ navigationUI: 'hide' }).then(
//         () => log('Fullscreened'),
//         (err) => log('Not fullscreen', err),
//     );
// });

function save () {
    log('Saving');
    window.localStorage.setItem('typing-game-buffer', typingZone.innerText);
}

function load() {
    log('Loading');
    const buffer = window.localStorage.getItem('typing-game-buffer');
    typingZone.innerText = buffer;
    selectEnd();
}

function selectEnd() {
    const range = document.createRange();
    range.selectNodeContents(typingZone);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

document.addEventListener('DOMContentLoaded', load);
window.addEventListener('beforeunload', save);