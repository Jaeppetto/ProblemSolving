function customSort(a, b) {
    const headA=a.replace(/[\d]+[\w.\s-]{0,}/,"");
    const headB=b.replace(/[\d]+[\w.\s-]{0,}/,"");
    let alphaComparison = headA.localeCompare(headB, undefined, { sensitivity: 'base' });


    if (alphaComparison === 0) {

        const realA=Number(a.match(/\d{1,5}/)[0]);

       const realB=Number(b.match(/\d{1,5}/)[0]);

        return realA - realB;
    }

    return alphaComparison;
}

function solution(files) {
    var answer = [];
    files.sort(customSort);

    return files;
}