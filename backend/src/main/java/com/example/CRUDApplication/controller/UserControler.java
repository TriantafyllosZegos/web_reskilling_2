//package com.example.CRUDApplication.controler;
//
//import com.example.CRUDApplication.model.Student;
//import com.example.CRUDApplication.model.User;
//import com.example.CRUDApplication.repository.StudentRepo;
//import com.example.CRUDApplication.repository.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/users")
//public class UserControler {
//    @Autowired
//    private UserRepo userRepo;
//
//    @GetMapping
//    public ResponseEntity<List<User>> getAllUsers(){}
//
//}
//
//
//
//    @GetMapping
//    public ResponseEntity<List<Student>> getAllStudents() {
//        try {
//            List<Student> studentList = new ArrayList<>(studentRepo.findAll());
//
//            if(studentList.isEmpty()){
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//
//            return new ResponseEntity<>(studentList, HttpStatus.OK);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }
//    @GetMapping("/{id}")
//    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
//        Optional<Student> studentData = studentRepo.findById(id);
//
//        if(studentData.isPresent()){
//            return new ResponseEntity<>(studentData.get(), HttpStatus.OK);
//        }
//
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @PostMapping("/addstudent")
//    public ResponseEntity<Student> addStudent(@RequestBody Student student){
//        Student studentObj =  studentRepo.save(student);
//
//        return new ResponseEntity<>(studentObj, HttpStatus.OK);
//    }
//    @PutMapping("/{id}")
//    public ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student newStudentData){
//        Optional<Student> oldStudentData = studentRepo.findById(id);
//
//        if(oldStudentData.isPresent()){
//            Student updatedStudentData = oldStudentData.get();
//            if (newStudentData.getName() != null) {
//                updatedStudentData.setName(newStudentData.getName());
//            }
//            if (newStudentData.getSurname() != null) {
//                updatedStudentData.setSurname(newStudentData.getSurname());
//            }
//
//            Student studentObj = studentRepo.save(updatedStudentData);
//            return new ResponseEntity<>(studentObj, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable Long id){
//        studentRepo.deleteById(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
