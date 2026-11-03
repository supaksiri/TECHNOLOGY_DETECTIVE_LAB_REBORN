# TECHNOLOGY DETECTIVE LAB — REBORN (alpha)

เว็บแอปสืบสวนเทคโนโลยี ม.4 ฉบับเขียนใหม่ด้วย React + TypeScript + Vite + React Three Fiber + Zustand แยกโมดูลจาก index.html

## การใช้งาน

```bash
npm install
npm run dev
npm run typecheck
npm run test
npm run build
npm run preview
```

> สำคัญ: ในสภาพแวดล้อมสร้างไฟล์ครั้งนี้ npm Registry ไม่สามารถเข้าถึงได้ จึง **ยังไม่ได้ติดตั้ง dependencies และยังไม่ได้ยืนยัน build/test ว่าผ่าน** ควรรันคำสั่งข้างต้นหลังดาวน์โหลดในเครื่องที่มีอินเทอร์เน็ต

## สิ่งที่เขียนไว้

- CASE 01 SMART FARM: 5 LAB, procedural 3D, hotspot, หาหลักฐาน E01–E05, จับคู่ศาสตร์แบบหลายคำตอบ, จำลองการให้น้ำ Q×t, Knowledge Network, ข้อสอบ 10 ข้อ, คะแนน 100, ตัวช่วย NOVA แบบ scripted, ส่งออก TXT/CSV, Local Storage
- CASE 02–06 เป็นรายการแผนงานที่ขึ้นสถานะ PLANNED และยังเล่นไม่ได้
- Teacher Mode แสดงข้อมูลเฉพาะเบราว์เซอร์และดาวน์โหลด CSV
- `/src/data/worksheetContract.ts` เป็นสัญญาข้อมูลใบงาน 3 หน้า (ยังไม่สร้างใบงาน)

## ข้อจำกัด

โมเดล 3D เป็นรูปทรงประกอบที่สร้างในโค้ด ไม่ใช่โมเดล CAD ที่สมจริง ระบบจำลองให้น้ำใช้สมมติฐานง่ายและไม่เหมาะเป็นแบบงานติดตั้งจริง ข้อมูลคะแนนไม่ได้ซิงก์ข้ามเครื่อง NOVA เป็นบทสนทนาคงที่ ไม่ใช่ AI ที่เชื่อม API

## GitHub Pages

1. สร้าง repository ชื่อที่ต้องการ แล้วอัปโหลดไฟล์ทั้งหมด (รวมโฟลเดอร์ `.github`)
2. ใน repo ให้รัน `npm install` เพื่อให้เกิด package-lock.json แล้ว commit ไฟล์นั้น (workflow ใช้ `npm install` เพื่อรองรับซอร์ส ZIP ที่ยังไม่มี lockfile)
3. Settings → Pages → Source เลือก GitHub Actions
4. Push ไป branch `main` และตรวจ workflow ว่าผ่านจริง
5. หากชื่อ repository ไม่ใช่ root domain, Vite base path ตั้งโดยตัวแปร `GITHUB_REPOSITORY` ตอน build อัตโนมัติ

โปรเจกต์นี้ยังไม่ได้อัปโหลดขึ้น GitHub หรือ Deploy จริง
