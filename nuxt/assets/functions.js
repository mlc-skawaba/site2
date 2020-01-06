'use strict';

export default {
    // 配列に入っているか確認する関数
    in_array(str, arr) {
        if(arr.lastIndexOf(str) >= 0){
            return true;
        }
        return false;
    }
}
