/*
bddjr-scratch-list-data-for-js

Scratch原版可用的列表转变量数据格式。
Use MIT License.

单片数据结构：
<length hex>:<data>
当列表有三项时：
<length hex>:<data><length hex>:<data><length hex>:<data>
以此类推。

*/

module.exports = {}

//===========================================================================
/**
 * 数组转数据字符串
 * @param {string[]} in_array 
 */
function array_to_data( in_array ){
    const ret_str_arr = [];
    for(let i of in_array){
        if( typeof i !== 'string' )
            i = String( i );

        ret_str_arr.push(`${i.length.toString(16)}:${i}`);
    }
    return ret_str_arr.join('');
}

module.exports.array_to_data = array_to_data;

//===========================================================================
/**
 * 数据字符串转数组
 * @param {string} in_data
 */
function data_to_array( in_data ){
    let D = String( in_data );

    /**@type {string[]}*/
    const ret_arr = [];

    while( D.length >0 ){
        /** indexOf ':' */
        let Index = D.indexOf(':');
        if( Index <1 ){
            throw 'get data error: index error';
        }

        /** get str length */
        let Leng = Number.parseInt(
            D.slice( 0, Index ) ,
            16
        );
        if( Number.isNaN( Leng ) ){
            throw 'get data error: Leng is NaN';
        }

        let LastIndex = Index + Leng +1;

        ret_arr.push( D.slice(
            Index +1 ,
            LastIndex
        ) );

        D = D.slice( LastIndex );
    }
    return ret_arr;
}

module.exports.data_to_array = data_to_array;
