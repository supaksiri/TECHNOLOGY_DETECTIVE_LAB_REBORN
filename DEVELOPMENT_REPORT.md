# รายงานพัฒนา — TECHNOLOGY DETECTIVE LAB REBORN

## ขอบเขต
สร้างโปรเจกต์ใหม่ตามคำสั่งผู้ใช้ โดยยึด Milestone 1 (foundation) และ Milestone 2 (SMART FARM vertical slice) เป็นหลัก ก่อนทำใบงาน

## เขียนซอร์สแล้ว
- React + TS + Vite architecture (แยก components/scenes/labs/engine/data/store/styles)
- กลไกสำรวจหลักฐานและฉาก 3D ที่ประกอบจากรูปทรง
- จับคู่ได้หลายศาสตร์; มีคำอธิบายประกอบ
- ระบบทดลองคำนวณปริมาตรน้ำจำลอง และสถานการณ์เซนเซอร์เสีย/ท่ออุดตัน
- Knowledge Map เลือกหลักฐานสนับสนุนศาสตร์
- 10-item assessment, คะแนน 5 องค์ประกอบรวม 100
- NOVA scripted, เก็บ progress ใน localStorage, TXT/CSV export
- หน้าเลือกคดีอีก 5 คดีมีป้าย PLANNED ชัดเจน
- แบบทดสอบระดับฟังก์ชันใน `src/tests`
- GitHub Actions template และ README

## สถานะการตรวจสอบ
- สามารถตรวจสอบว่าไฟล์โค้ด/JSON อยู่ครบตามโครงสร้าง
- **ไม่ได้ติดตั้ง dependencies** เนื่องจาก DNS/network ไม่เข้าถึง registry.npmjs.org
- **ยังไม่ได้รัน TypeScript, Vitest หรือ Vite production build ให้ผ่าน**
- **ยังไม่ได้ทดสอบเล่นผ่าน browser**
- **ยังไม่ได้ Deploy/Commit ไป GitHub**

## งานที่ต้องตรวจหลัง npm install
1. `npm run typecheck` และแก้ข้อผิดพลาดหากมี
2. `npm run test`
3. `npm run build`
4. เปิด `npm run dev` ทดสอบเล่นครบ 5 LAB รวมการบันทึก/กู้คืนข้อมูล
5. ทดสอบมือถือ/แท็บเล็ตและ WebGL fallback
6. commit package-lock.json และตรวจ Actions

## Roadmap
- ปรับรายละเอียด 3D/texture/animations ให้สมจริงขึ้น
- เพิ่มกราฟผลการทดลองและ scenario presets
- ขยายคดีอีก 5 คดีให้เล่นได้จริง
- เพิ่ม accessibility + camera focus ต่อหลักฐาน
- เพิ่ม analytics ครูเมื่อมี backend ที่เหมาะสม
- ออกแบบใบงานตาม Worksheet Evidence Contract หลังทดสอบแล้ว
