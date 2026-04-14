# Hiox India Hosting Deployment Guide - Tow Rides

## Important: Hiox Hosting (No SSH/Terminal Access)

यह guide Hiox India hosting के लिए है जहाँ SSH/Terminal access नहीं है। 
इसलिए हम **Static Export** method use करेंगे।

## Step 1: Build Project Locally (Required)

```bash
npm run build
```

यह `.next/out` folder create करेगा जिसमें static HTML files होंगी जो किसी भी web hosting पर चल सकती हैं।

## Step 2: Build करने के बाद Files Upload करें

**Static Export के बाद**, आपको सिर्फ `out` folder की contents upload करनी हैं:

### Files to Upload (Static Export Method):
```
✅ out/ folder की सारी contents
   - index.html (homepage)
   - book.html, contact.html, app.html, whatsapp.html (सभी pages)
   - _next/ folder (CSS, JS files)
   - media/ folder (logo, images)
   - downloads/ folder (APK files)
   - सभी .svg files और favicon.ico
```

**नहीं upload करें:**
- `node_modules/` folder
- `src/` folder (build हो चुका है)
- `package.json` (जरूरत नहीं)
- `.next/` folder (जरूरत नहीं)
- कोई भी source files

## Step 3: Hiox India Admin Panel में Upload

1. **Hiox India Admin Panel** में login करें
2. **File Manager** या **FTP** access लें
3. **admin folder** में जाएं (या जहाँ deploy करना है)
4. **`out` folder की सारी contents** upload करें:
   - `out` folder खोलें
   - सारी files और folders select करें
   - `admin` folder में upload करें

**Important:**
- `out` folder की **contents** upload करें (folder structure maintain करें)
- `index.html` file `admin` folder में होनी चाहिए
- `_next/` folder भी upload करना जरूरी है (CSS/JS files)
- सभी subfolders (media, downloads) भी upload करें

## Step 5: PM2 Setup (For Auto-restart)

अगर PM2 available है:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "tow-rides" -- start

# Save PM2 configuration
pm2 save

# Setup auto-start on reboot
pm2 startup
```

## Step 6: Environment Variables (अगर needed)

अगर कोई environment variables चाहिए, `.env.local` file create करें:
```
NODE_ENV=production
```

## Important Notes for Hiox India:

1. **Static Export**: कोई Node.js या server-side rendering नहीं - सिर्फ static HTML/CSS/JS
2. **No SSH Required**: सिर्फ File Manager/FTP से upload करें
3. **Admin Folder**: अगर `admin` folder में upload कर रहे हैं:
   - URL होगा: `yourdomain.com/admin`
   - या `yourdomain.com/admin/index.html`
4. **SSL Certificate**: Hiox panel से SSL enable करें
5. **File Permissions**: सभी files की permissions 644 और folders की 755 set करें

## Quick Steps Summary:

1. ✅ `next.config.ts` में `output: 'export'` add करें (already done)
2. ✅ Locally `npm run build` run करें
3. ✅ `.next/out` folder की contents ZIP करें
4. ✅ Hiox Admin Panel → File Manager → `admin` folder में upload करें
5. ✅ Extract करें और test करें

## Step 4: Build Command (Run Locally) - ✅ Already Done!

Build already complete है! `out` folder ready है।

**Build के बाद:**
- `out/` folder में सारी static files ready हैं
- इन्हें directly Hiox hosting पर upload कर सकते हैं
- कोई Node.js या npm install की जरूरत नहीं

**Next Steps:**
1. `out` folder को ZIP करें
2. Hiox Admin Panel में upload करें
3. Extract करें
4. Test करें!

## Troubleshooting:

- **Build errors**: Check Node.js version (should be 18+)
- **Port issues**: Check Hostinger documentation for assigned port
- **Memory issues**: Increase Node.js memory limit if needed

