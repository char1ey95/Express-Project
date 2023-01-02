# Express Project

-   강찬수(프론트엔드)
-   김성희(백엔드)
-   박종환(백엔드)

## 1일차

### 각 파트별 구상

-   HOME
-   JOIN
-   LOGIN
-   PROFILE
-   BOARD/LIST
-   BOARD/WRITE
-   BOARD/VIEW
-   BOARD/MODIFY
-   ADMIN(선택)

### 일정 계획하기

-   날마다 한 라우터씩 구현

### 작업순서 정하기

1. 라우터 연결
2. 컨트롤러 구현
3. 데이터베이스(MYSQL) 구현
4. 레파지토리 구현
5. 서비스 구현
6. 서비스와 컨트롤러 연결
7. 화면 꾸미기(프론트)

### 각 작업별 요구사항 숙지 및 학습하기

### 데이터 저장형태 정하기(SQL)

-   데이터베이스 : project
-   테이블명: user, board

```sql
-- user
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| user_id     | varchar(50) | NO   | PRI | NULL    |       |
| user_pw     | int         | NO   |     | NULL    |       |
| user_name   | varchar(50) | NO   |     | NULL    |       |
| nickname    | varchar(50) | NO   |     | NULL    |       |
| birth       | date        | NO   |     | NULL    |       |
| gender      | char(4)     | YES  |     | 남자     |       |
| telephone   | char(32)    | YES  |     | NULL    |       |
| mobile      | char(32)    | NO   |     | NULL    |       |
| user_author | tinyint(1)  | NO   |     | 1       |       |
| level       | int         | NO   |     | 3       |       |
+-------------+-------------+------+-----+---------+-------+
```

```sql
--board
+--------------+-------------+------+-----+-------------------+-------------------+
| Field        | Type        | Null | Key | Default           | Extra             |
+--------------+-------------+------+-----+-------------------+-------------------+
| idx          | int         | NO   | PRI | NULL              | auto_increment    |
| subject      | varchar(50) | NO   |     | NULL              |                   |
| user_id      | varchar(50) | NO   |     | NULL              |                   |
| content      | text        | YES  |     | NULL              |                   |
| registerDate | datetime    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| hit          | int         | YES  |     | 0                 |                   |
+--------------+-------------+------+-----+-------------------+-------------------+
```

### README 파일 입력

## 2일차

### 목표

-   분배된 파트 라우터 1개(백엔드)

### 작업진행도

-   찬수: main 구현(Front)
-   성희 : /board/list 구현(Back)
-   성희 : Javascript 학습
-   종환 : /user/join 구현(Back)
-   종환 : Cookie 학습

## 3일차

### 목표

-   분배된 파트 라우터 1개(백엔드)

### 작업진행도

-   찬수 : 각 페이지 별 색상 및 폼 구상
-   찬수 : home 기능 구현
-   성희 : view 페이지 구현
-   성희 : write GET 구현
-   성희 : view, write 완료
-   종환 : Welcome 구현
-   종환 : welcome, profile 구상

## 4일차

### 목표

-   분배된 파트 라우터 1개(백엔드)
-   화면 꾸미기(프론트 엔드)

### 작업진행도

-   Board/write 작업완료
-   Board/modify 작업완료
-   Board/delete 작업완료
-   User/logout 작업완료
-   Html 및 Css 작업 시작
-   Admin 작업시작

## 5일차

-   화면 꾸미기(프론트 엔드)

### 작업진행도

-   User, Board 오류체크
-   각 파트별 마무리 점검
-   게시판 Css 작업시작
-   Admin 기능 작업 시작

## 6~7일차

### 작업진행도

-   최종 디자인 점검
-   웹페이지 전체적인 오류 점검
-   Admin 기능 작업완료
