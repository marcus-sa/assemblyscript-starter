(module
 (type $iv (func (param i32)))
 (type $v (func))
 (import "console" "log" (func $src/index/console.log (param i32)))
 (global $~lib/allocator/arena/startOffset (mut i32) (i32.const 0))
 (global $~lib/allocator/arena/offset (mut i32) (i32.const 0))
 (memory $0 1)
 (data (i32.const 8) "\04\00\00\00M\00I\00L\00F")
 (export "memory" (memory $0))
 (start $start)
 (func $start (; 1 ;) (type $v)
  (set_global $~lib/allocator/arena/startOffset
   (i32.const 24)
  )
  (set_global $~lib/allocator/arena/offset
   ;;@ ~lib/allocator/arena.ts:13:20
   (get_global $~lib/allocator/arena/startOffset)
  )
  ;;@ src/index.ts:11:8
  (call $src/index/console.log
   ;;@ src/index.ts:11:12
   (i32.const 8)
  )
 )
)
