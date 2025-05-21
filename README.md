# Django Student Management System Website
This is a Simple Student Management System Developed for Educational Purpose using Python (Django).
We're building this project as part of final exam
And if you like this project then ADD a STAR ⭐️  to this project 👆

## MAIN FUNCTION OF THIS PROJECT

### A. Admin Users Can
1. See Overall Summary Charts of Stuudents Performance, Staffs Perfomrances, Courses, Subjects, Leave, etc.
2. Manage Staffs (Add, Update and Delete)
3. Manage Students (Add, Update and Delete)
4. Manage Course (Add, Update and Delete)
5. Manage Subjects (Add, Update and Delete)
6. Manage Sessions (Add, Update and Delete)
7. View Student Attendance
8. Review and Reply Student/Staff Feedback
9. Review (Approve/Reject) Student/Staff Leave

### B. Staff/Teachers Can
1. See the Overall Summary Charts related to their students, their subjects, leave status, etc.
2. Take/Update Students Attendance
3. Add/Update Result
4. Apply for Leave
5. Send Feedback to HOD

### C. Students Can
1. See the Overall Summary Charts related to their attendance, their subjects, leave status, etc.
2. View Attendance
3. View Result
4. Apply for Leave
5. Send Feedback to HOD

## Project Hierachy
'''
django-student-management-system/
├── core/
│ ├── migrations/ # Các file migration database của app core
│ ├── init.py
│ ├── admin.py # Đăng ký model với Django Admin
│ ├── apps.py # Cấu hình app core
│ ├── forms.py # Định nghĩa các Django Form
│ ├── models.py # Các model cơ sở dữ liệu chính
│ ├── tests.py # File test cho app core
│ ├── urls.py # URL routing cho app core
│ └── views.py # Logic xử lý request và response
├── media/ # Thư mục lưu trữ file upload (ảnh, tài liệu,...)
│ └── profile_pics/ # Ảnh đại diện user
├── student_management_system/
│ ├── init.py
│ ├── asgi.py # ASGI config
│ ├── settings.py # Cấu hình dự án Django
│ ├── urls.py # URL routing tổng cho dự án
│ └── wsgi.py # WSGI config
├── templates/ # Thư mục chứa file giao diện HTML
│ ├── admin_template/ # Giao diện dành cho quản trị viên
│ ├── staff_template/ # Giao diện dành cho nhân viên/giảng viên
│ ├── student_template/ # Giao diện dành cho sinh viên
│ ├── base.html # Template gốc dùng chung
│ └── login_page.html # Trang đăng nhập
├── manage.py # Script điều khiển Django (runserver, migrate,...)
├── db.sqlite3 # Database SQLite (file dữ liệu)
├── requirements.txt # Thư viện cần thiết để chạy dự án
└── README.md # File mô tả dự án
'''
## How to Install and Run this project?

### Pre-Requisites:
1. Install Git Version Control
[ https://git-scm.com/ ]

2. Install Python Latest Version
[ https://www.python.org/downloads/ ]

3. Install Pip (Package Manager)
[ https://pip.pypa.io/en/stable/installing/ ]

*Alternative to Pip is Homebrew*

### Installation
**1. Create a Folder where you want to save the project**

**2. Create a Virtual Environment and Activate**

Install Virtual Environment First
```
$  pip install virtualenv
```

Create Virtual Environment

For Windows
```
$  python -m venv venv
```
For Mac
```
$  python3 -m venv venv
```

Activate Virtual Environment

For Windows
```
$  source venv/scripts/activate
```

For Mac
```
$  source venv/bin/activate
```

**3. Clone this project**
```
$  git clone https://github.com/HungKai30/LMS-VJU
```

Then, Enter the project
```
$  cd django-student-management-system
```

**4. Install Requirements from 'requirements.txt'**
```python
$  pip install -r requirements.txt
```

**5. Add the hosts**

- Got to settings.py file 
- Then, On allowed hosts, Add [‘*’]. 
```python
ALLOWED_HOSTS = ['*']
```
*No need to change on Mac.*


**6. Now Run Server**

Command for PC:
```python
$ python manage.py runserver
```

Command for Mac:
```python
$ python3 manage.py runserver
```

**7. Login Credentials**

Create Super User (HOD)
```
$  python manage.py createsuperuser
```
Then Add Email, Username and Password

**or Use Default Credentials**

*For HOD /SuperAdmin*
Email: admin@gmail.com
Password: admin

*For Staff*
Email: staff@gmail.com
Password: staff

*For Student*
Email: student@gmail.com
Password: student



## For Sponsor or Projects Enquiry
1. Nguyen Canh Hung
2. Nguyen Huu Giap
3. Tran Thanh Tuan
4. Duong Minh Vu
5. Hoang Duc Viet
