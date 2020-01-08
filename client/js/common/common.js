export class Common{
    static shuffle(arr){
        for (let i = 0; i < arr.length; i++){
          let swapIdx = Math.trunc(Math.random() * arr.length);
          let tmp = arr[swapIdx];
          arr[swapIdx] = arr[i];
          arr[i] = tmp;
        }
        return arr;
    }

    static createAudioElement(src, loop){
       let newSound = document.createElement('audio');
       newSound.src = src;
       newSound.loop = loop;
       return newSound;
    }
}