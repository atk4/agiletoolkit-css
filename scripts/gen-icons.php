<?php
// Generates ../playground/includes/


/*

 .atk-row
  .the-icons.atk-col-3(title='Code: 0xe97e')
    i.icon-plus-1
    span.i-name plus-1
    span.i-code 0xe97e
  .the-icons.atk-col-3(title='Code: 0xe820')
    i.icon-plus
    span.i-name plus
    span.i-code 0xe820
  .the-icons.atk-col-3(title='Code: 0xe981')
    i.icon-minus-1
    span.i-name minus-1
    span.i-code 0xe981
  .the-icons.atk-col-3(title='Code: 0xe824')
    i.icon-minus
    span.i-name minus
    span.i-code 0xe824
*/

$json = json_decode(file_get_contents('../playground/font/config.json'),true);
$json = $json['glyphs'];

usort($json,function($a,$b){
    return $a['css']>$b['css'];
});

$json = array_chunk($json, ceil(count($json)/4));
header('Content-type: text/plain');

echo ".atk-cells.atk-cells-gutter-small\n";

foreach($json as $column){
    echo "  .atk-cell\n";

    foreach($column as $icon){
        echo "    .the-icons(title='Code: ".$icon['code'].", ".$icon['src']."')\n";
        echo "        i.icon-".$icon['css']."\n";
        echo "        span.i-name ".$icon['css']."\n";
        echo "        span.i-code ".$icon['code']."\n";
    }

}