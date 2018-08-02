(module
 (type $iv (func (param i32)))
 (type $ii (func (param i32) (result i32)))
 (type $v (func))
 (import "console" "log" (func $src/index/console.log (param i32)))
 (import "document" "querySelector" (func $src/index/document.querySelector (param i32) (result i32)))
 (global $~lib/allocator/arena/startOffset (mut i32) (i32.const 0))
 (global $~lib/allocator/arena/offset (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 8) "\16\00\00\00I\00n\00i\00t\00i\00a\00l\00i\00z\00e\00d\00 \00f\00r\00o\00m\00 \00A\00S\00.\00.\00.")
 (data (i32.const 56) "\04\00\00\00b\00o\00d\00y")
 (export "memory" (memory $0))
 (start $start)
 (func $start (; 2 ;) (type $v)
  (set_global $~lib/allocator/arena/startOffset
   (i32.const 72)
  )
  (set_global $~lib/allocator/arena/offset
   ;;@ ~lib/allocator/arena.ts:13:20
   (get_global $~lib/allocator/arena/startOffset)
  )
  ;;@ src/index.ts:15:8
  (call $src/index/console.log
   ;;@ src/index.ts:15:12
   (i32.const 8)
  )
  ;;@ src/index.ts:16:8
  (call $src/index/console.log
   ;;@ src/index.ts:16:21
   (call $src/index/document.querySelector
    ;;@ src/index.ts:16:35
    (i32.const 56)
   )
  )
 )
)
