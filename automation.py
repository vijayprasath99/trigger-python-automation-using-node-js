import time

print('AUTOMATION STARTED!!!')
time.sleep(4)
print('AUTOMATION SLEEP DONE!!!')
f = open("./completion-report.txt", "w")
f.write("Yayy file created")
print('AUTOMATION ENDED!!!')
f.close()