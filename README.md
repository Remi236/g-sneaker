# G Sneaker [(webdev intern assignment)](https://github.com/GoldenOwlAsia/webdev-intern-assignment)
## Setup run on local (note: pnpm required)
1. Open 2 terminals same folder root
2. Create `.env` file in folder `/app` with content
```env
VITE_BASE_API=http://localhost:3000
```
3. Run bash terminal 1
```bash
pnpm setupclient
``` 
```bash
pnpm startclient
``` 
4. Run bash terminal 2
```bash
pnpm setupserver
``` 
```bash
pnpm startserver
``` 
5. Open browser at (http://localhost:5173/)