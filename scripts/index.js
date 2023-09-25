function insertFragments() {
    const fragments = document.querySelectorAll("fragment");
    fragments.forEach(fragment => {
        const source = fragment.getAttribute("src") || fragment.dataset.src;
        if (source === null) return;

        $.ajax(source, {
            success: data => {
                fragment.innerHTML = data;
            }
        })
    });
}

function main() {
    insertFragments();
}

main();