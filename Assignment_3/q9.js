function countWords(paragraph) {
    return paragraph.split(' ').filter(word => word.length > 0).length;
}
