from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages
from django.core.files.storage import FileSystemStorage #To upload Profile Picture
from django.urls import reverse
import datetime # To Parse input DateTime into Python Date Time Object

from student_management_app.models import CustomUser, Staffs, Courses, Subjects, Students, Attendance, AttendanceReport, LeaveReportStudent, FeedBackStudent, StudentResult
from .models import Students, TodoItem # Thêm TodoItem vào import
from .forms import TodoItemForm # Import form vừa tạo
from django.shortcuts import get_object_or_404 # Để lấy đối tượng hoặc báo lỗi 404

def student_home(request):
    student_obj = Students.objects.get(admin=request.user.id)
    total_attendance = AttendanceReport.objects.filter(student_id=student_obj).count()
    attendance_present = AttendanceReport.objects.filter(student_id=student_obj, status=True).count()
    attendance_absent = AttendanceReport.objects.filter(student_id=student_obj, status=False).count()

    course_obj = Courses.objects.get(id=student_obj.course_id.id)
    total_subjects = Subjects.objects.filter(course_id=course_obj).count()

    subject_name = []
    data_present = []
    data_absent = []
    subject_data = Subjects.objects.filter(course_id=student_obj.course_id)
    for subject in subject_data:
        attendance = Attendance.objects.filter(subject_id=subject.id)
        attendance_present_count = AttendanceReport.objects.filter(attendance_id__in=attendance, status=True, student_id=student_obj.id).count()
        attendance_absent_count = AttendanceReport.objects.filter(attendance_id__in=attendance, status=False, student_id=student_obj.id).count()
        subject_name.append(subject.subject_name)
        data_present.append(attendance_present_count)
        data_absent.append(attendance_absent_count)
    
    context={
        "total_attendance": total_attendance,
        "attendance_present": attendance_present,
        "attendance_absent": attendance_absent,
        "total_subjects": total_subjects,
        "subject_name": subject_name,
        "data_present": data_present,
        "data_absent": data_absent
    }
    return render(request, "student_template/student_home_template.html", context)


def student_view_attendance(request):
    student = Students.objects.get(admin=request.user.id) # Getting Logged in Student Data
    course = student.course_id # Getting Course Enrolled of LoggedIn Student
    # course = Courses.objects.get(id=student.course_id.id) # Getting Course Enrolled of LoggedIn Student
    subjects = Subjects.objects.filter(course_id=course) # Getting the Subjects of Course Enrolled
    context = {
        "subjects": subjects
    }
    return render(request, "student_template/student_view_attendance.html", context)


def student_view_attendance_post(request):
    if request.method != "POST":
        messages.error(request, "Invalid Method")
        return redirect('student_view_attendance')
    else:
        # Getting all the Input Data
        subject_id = request.POST.get('subject')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')

        # Parsing the date data into Python object
        start_date_parse = datetime.datetime.strptime(start_date, '%Y-%m-%d').date()
        end_date_parse = datetime.datetime.strptime(end_date, '%Y-%m-%d').date()

        # Getting all the Subject Data based on Selected Subject
        subject_obj = Subjects.objects.get(id=subject_id)
        # Getting Logged In User Data
        user_obj = CustomUser.objects.get(id=request.user.id)
        # Getting Student Data Based on Logged in Data
        stud_obj = Students.objects.get(admin=user_obj)

        # Now Accessing Attendance Data based on the Range of Date Selected and Subject Selected
        attendance = Attendance.objects.filter(attendance_date__range=(start_date_parse, end_date_parse), subject_id=subject_obj)
        # Getting Attendance Report based on the attendance details obtained above
        attendance_reports = AttendanceReport.objects.filter(attendance_id__in=attendance, student_id=stud_obj)

        # for attendance_report in attendance_reports:
        #     print("Date: "+ str(attendance_report.attendance_id.attendance_date), "Status: "+ str(attendance_report.status))

        # messages.success(request, "Attendacne View Success")

        context = {
            "subject_obj": subject_obj,
            "attendance_reports": attendance_reports
        }

        return render(request, 'student_template/student_attendance_data.html', context)
       

def student_apply_leave(request):
    student_obj = Students.objects.get(admin=request.user.id)
    leave_data = LeaveReportStudent.objects.filter(student_id=student_obj)
    context = {
        "leave_data": leave_data
    }
    return render(request, 'student_template/student_apply_leave.html', context)


def student_apply_leave_save(request):
    if request.method != "POST":
        messages.error(request, "Invalid Method")
        return redirect('student_apply_leave')
    else:
        leave_date = request.POST.get('leave_date')
        leave_message = request.POST.get('leave_message')

        student_obj = Students.objects.get(admin=request.user.id)
        try:
            leave_report = LeaveReportStudent(student_id=student_obj, leave_date=leave_date, leave_message=leave_message, leave_status=0)
            leave_report.save()
            messages.success(request, "Applied for Leave.")
            return redirect('student_apply_leave')
        except:
            messages.error(request, "Failed to Apply Leave")
            return redirect('student_apply_leave')


def student_feedback(request):
    student_obj = Students.objects.get(admin=request.user.id)
    feedback_data = FeedBackStudent.objects.filter(student_id=student_obj)
    context = {
        "feedback_data": feedback_data
    }
    return render(request, 'student_template/student_feedback.html', context)


def student_feedback_save(request):
    if request.method != "POST":
        messages.error(request, "Invalid Method.")
        return redirect('student_feedback')
    else:
        feedback = request.POST.get('feedback_message')
        student_obj = Students.objects.get(admin=request.user.id)

        try:
            add_feedback = FeedBackStudent(student_id=student_obj, feedback=feedback, feedback_reply="")
            add_feedback.save()
            messages.success(request, "Feedback Sent.")
            return redirect('student_feedback')
        except:
            messages.error(request, "Failed to Send Feedback.")
            return redirect('student_feedback')


def student_profile(request):
    user = CustomUser.objects.get(id=request.user.id)
    student = Students.objects.get(admin=user)

    context={
        "user": user,
        "student": student
    }
    return render(request, 'student_template/student_profile.html', context)


def student_profile_update(request):
    if request.method != "POST":
        messages.error(request, "Invalid Method!")
        return redirect('student_profile')
    else:
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password = request.POST.get('password')
        address = request.POST.get('address')

        try:
            customuser = CustomUser.objects.get(id=request.user.id)
            customuser.first_name = first_name
            customuser.last_name = last_name
            if password != None and password != "":
                customuser.set_password(password)
            customuser.save()

            student = Students.objects.get(admin=customuser.id)
            student.address = address
            student.save()
            
            messages.success(request, "Profile Updated Successfully")
            return redirect('student_profile')
        except:
            messages.error(request, "Failed to Update Profile")
            return redirect('student_profile')


def student_view_result(request):
    student = Students.objects.get(admin=request.user.id)
    student_result = StudentResult.objects.filter(student_id=student.id)
    context = {
        "student_result": student_result,
    }
    return render(request, "student_template/student_view_result.html", context)

def student_todo_list(request):
    try:
        student_profile = Students.objects.get(admin=request.user.id)
    except Students.DoesNotExist:
        messages.error(request, "Không tìm thấy thông tin sinh viên.")
        return redirect('student_home') # Hoặc một trang lỗi phù hợp

    if request.method == "POST":
        form = TodoItemForm(request.POST)
        if form.is_valid():
            todo_item = form.save(commit=False) # Chưa lưu vào CSDL vội
            todo_item.student = student_profile # Gán sinh viên hiện tại cho công việc
            todo_item.save() # Bây giờ mới lưu
            messages.success(request, "Đã thêm công việc mới!")
            return redirect('student_todo_list') # Chuyển hướng về trang to-do list
        else:
            messages.error(request, "Vui lòng kiểm tra lại thông tin nhập.")
    else:
        form = TodoItemForm() # Form trống cho GET request

    todo_items = TodoItem.objects.filter(student=student_profile) # Lấy tất cả công việc của sinh viên này
    
    context = {
        "todo_items": todo_items,
        "form": form,
        "page_title": "Danh sách Công việc" 
    }
    return render(request, "student_template/student_todo_list.html", context)


def student_todo_mark_complete(request, todo_id):
    try:
        student_profile = Students.objects.get(admin=request.user.id)
        todo_item = get_object_or_404(TodoItem, id=todo_id, student=student_profile) # Đảm bảo công việc thuộc về sinh viên này
    except Students.DoesNotExist:
        messages.error(request, "Không tìm thấy thông tin sinh viên.")
        return redirect('student_home')
    
    todo_item.is_completed = not todo_item.is_completed # Đảo ngược trạng thái hoàn thành
    todo_item.save()
    
    if todo_item.is_completed:
        messages.success(request, f"Công việc '{todo_item.title}' đã được đánh dấu hoàn thành.")
    else:
        messages.info(request, f"Công việc '{todo_item.title}' đã được đánh dấu chưa hoàn thành.")
        
    return redirect('student_todo_list')


def student_todo_delete(request, todo_id):
    try:
        student_profile = Students.objects.get(admin=request.user.id)
        todo_item = get_object_or_404(TodoItem, id=todo_id, student=student_profile) # Đảm bảo công việc thuộc về sinh viên này
    except Students.DoesNotExist:
        messages.error(request, "Không tìm thấy thông tin sinh viên.")
        return redirect('student_home')
        
    item_title = todo_item.title
    todo_item.delete()
    messages.success(request, f"Đã xóa công việc '{item_title}'.")
    return redirect('student_todo_list')

def student_todo_edit(request, todo_id):
    try:
        student_profile = Students.objects.get(admin=request.user.id)
        # Lấy công việc cần sửa, đảm bảo nó thuộc về sinh viên đang đăng nhập
        todo_item = get_object_or_404(TodoItem, id=todo_id, student=student_profile)
    except Students.DoesNotExist:
        messages.error(request, "Không tìm thấy thông tin sinh viên.")
        return redirect('student_home') # Hoặc một trang lỗi phù hợp
    
    if request.method == "POST":
        form = TodoItemForm(request.POST, instance=todo_item) # Truyền instance để form biết là đang sửa
        if form.is_valid():
            form.save() # Lưu các thay đổi vào đối tượng todo_item hiện có
            messages.success(request, f"Đã cập nhật công việc '{todo_item.title}'!")
            return redirect('student_todo_list') # Chuyển hướng về trang to-do list
        else:
            messages.error(request, "Vui lòng kiểm tra lại thông tin nhập.")
    else:
        # Khi GET request, hiển thị form với dữ liệu hiện tại của công việc
        form = TodoItemForm(instance=todo_item) 
    
    context = {
        "form": form,
        "todo_item": todo_item, # Truyền todo_item để có thể hiển thị tiêu đề hoặc ID nếu cần
        "page_title": f"Modify: {todo_item.title}"
    }
    return render(request, "student_template/student_todo_edit.html", context)


