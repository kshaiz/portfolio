import scrollIntoView from 'scroll-into-view-if-needed';

export function importFile(r) {
  let file = {};
  r.keys().map(
    (item) => { return file[item.replace('./', '')] = r(item); });
  return file;
}

export function downloadFile(object, target, format) {
  const link = document.createElement("a");
  link.setAttribute('download', `${target}.${format}`);
  link.href = object[`${target}.${format}`];
  link.click();
};

export function openUrl(url, target) {
    let link = document.createElement('a');
    link.target= target;
    link.href=url;
    link.click();
}

export function jumpTo(node) {
  scrollIntoView(
    document.getElementById(node),
    {
      behavior: 'smooth',
      block: 'start'
    }
  )
};