echo 'Setup for injct loading...'
echo 'Installing/Updating npm...'
pip install npm  > /dev/null
sleep 1
echo 'Installing/Updating colors...'
npm i colors  > /dev/null
sleep 1
echo 'Installing/Updating fs...'
npm i fs  > /dev/null
sleep 1
echo 'Setup done, you may now continue with using injct!'
sleep 3