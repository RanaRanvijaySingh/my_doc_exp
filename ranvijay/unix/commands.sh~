echo "HOSTENAME IS : " >>assignment.log
(hostname && date) >> assignment.log
echo "     " >> assignment.log




echo "COMPLETE DIRECTORY PATH :" >>assignment.log
(pwd && date) >> assignment.log
echo "     " >> assignment.log


echo "DETAIL OF THE OERATING SYSTEM : " >>assignment.log
(uname -a && date) >> assignment.log
echo "     " >> assignment.log




echo "COMPLETE DIRECTORY PATH :" >>assignment.log
(pwd && date) >> assignment.log
echo "     " >> assignment.log



echo "LAST USER TO LOG IN WAS: " >>assignment.log
(w && date) >> assignment.log
echo "     " >> assignment.log



echo "PRESENT GROUP IS: " >>assignment.log
(groups && date) >> assignment.log
echo "     " >> assignment.log


echo "ALL THE FILE IN THE DIRECOTRY AND SUB DIRECTORY: " >>assignment.log
(find . -type f -exec ls -l --full-time {} \; 2> /dev/null | sort -t' ' -k +6,6 -k +7,7 && date) >> assignment.log
echo "     " >> assignment.log





echo "RENAMING ALL THE FILE WITH TXT FORMAT: " >>assignment.log
(rename -v 's/^/Unix_/' *.txt && date) >> assignment.log
echo "     " >> assignment.log





echo "RENAMING ALL THE FILE WITH STARTING LETTER X" >>assignment.log
(rename -v 's/^/Unix_/' x* && date) >> assignment.log
echo "     " >> assignment.log





echo "FILE PERMISSION CHANGED: " >>assignment.log
(chmod 777 public_html/readme.txt && date) >> assignment.log
echo "     " >> assignment.log







echo "copying file  : " >>assignment.log
(sudo cp -r public_html public_html && date) >> assignment.log
echo "     " >> assignment.log




