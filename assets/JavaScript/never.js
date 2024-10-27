const link_never = document.getElementById("link_never");
const video = document.getElementById('video');

function CreateIframe()
{
    const existe_iframe = video.querySelector('iframe');
    if (existe_iframe)
    {
        video.removeChild(existe_iframe);
    }

    const iframe= document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=-7i0-hoyJqAN3aUV';
    iframe.width = '560';
    iframe.height = '315';
    iframe.allowFullscreen = true;

    video.appendChild(iframe)
    video.style.display = 'block;'
}

link_never.addEventListener('click', CreateIframe);