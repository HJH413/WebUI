<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.*"%>
<%--

  Created by IntelliJ IDEA.
  User: A
  Date: 2022-02-18
  Time: 오전 11:00
  To change this template use File | Settings | File Templates.
--%>

<%
    // 0.화면의 입력값 얻오
    int empno = Integer.parseInt(request.getParameter("empno"));
    int sal = Integer.parseInt(request.getParameter("sal"));
    int deptno = Integer.parseInt(request.getParameter("deptno"));
    String job = request.getParameter("job");
    String ename = request.getParameter("ename");

    String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
    String user = "scott";
    String pass = "tiger";

    //1.드라이버를 메모리에 로딩
    Class.forName("oracle.jdbc.driver.OracleDriver");
    System.out.println("드라이버 로딩 성공");
    //2.연결객체 얻오기
    Connection con = DriverManager.getConnection(url,user,pass);
    System.out.println("DB 연결 성공");
    //3.sql 문장
    String sql = "INSERT INTO emp(empno, ename, job, sal, deptno) VALUES (?, ?, ?, ?, ?)";
    //4.전송객체 얻어오기 - PreparedStatement;
    PreparedStatement ps = con.prepareStatement(sql);
    ps.setInt(1,empno);
    ps.setString(2,ename);
    ps.setString(3,job);
    ps.setInt(4,sal);
    ps.setInt(5,deptno);
    //5. 전송 : executeUpdate();
   int result = ps.executeUpdate();
  System.out.println(result + "행을 실행");
    //6.닫기
    ps.close();
    con.close();
%>
<html>
<head>
    <title>사원정보입력</title>
</head>
<body>
정보가 잘 입력되었습니다.
</body>
</html>
