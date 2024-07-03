(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{594:function(t,_,e){"use strict";e.r(_);var v=e(24),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mvcc多版本并发控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvcc多版本并发控制"}},[t._v("#")]),t._v(" MVCC多版本并发控制")]),t._v(" "),e("h3",{attrs:{id:"_1、mvcc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、mvcc"}},[t._v("#")]),t._v(" 1、MVCC")]),t._v(" "),e("p",[t._v("​\t\tMVCC，全称Multi-Version Concurrency Control，即多版本并发控制。MVCC是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("\tMVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理读写冲突，做到即使有读写冲突时，也能做到不加锁，非阻塞并发读。\n")])])]),e("h3",{attrs:{id:"_2、当前读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、当前读"}},[t._v("#")]),t._v(" 2、当前读")]),t._v(" "),e("p",[t._v("​\t\t像select lock in share mode(共享锁), select for update ; update, insert ,delete(排他锁)这些操作都是一种当前读，为什么叫当前读？就是它读取的是记录的最新版本，读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。")]),t._v(" "),e("h3",{attrs:{id:"_3、快照读-提高数据库的并发查询能力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、快照读-提高数据库的并发查询能力"}},[t._v("#")]),t._v(" 3、快照读（提高数据库的并发查询能力）")]),t._v(" "),e("p",[t._v("​\t\t像不加锁的select操作就是快照读，即不加锁的非阻塞读；快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读；之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于多版本并发控制，即MVCC,可以认为MVCC是行锁的一个变种，但它在很多情况下，避免了加锁操作，降低了开销；既然是基于多版本，即快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本")]),t._v(" "),e("h3",{attrs:{id:"_4、当前读、快照读、mvcc关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、当前读、快照读、mvcc关系"}},[t._v("#")]),t._v(" 4、当前读、快照读、MVCC关系")]),t._v(" "),e("p",[t._v("​\t\tMVCC多版本并发控制指的是维持一个数据的多个版本，使得读写操作没有冲突，快照读是MySQL为实现MVCC的一个非阻塞读功能。MVCC模块在MySQL中的具体实现是由三个隐式字段，undo日志、read view三个组件来实现的。")]),t._v(" "),e("h3",{attrs:{id:"_5、mvcc解决的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、mvcc解决的问题"}},[t._v("#")]),t._v(" 5、MVCC解决的问题")]),t._v(" "),e("p",[t._v("​\t\t数据库并发场景有三种，分别为：")]),t._v(" "),e("p",[t._v("​\t\t1、读读：不存在任何问题，也不需要并发控制")]),t._v(" "),e("p",[t._v("​\t\t2、读写：有线程安全问题，可能会造成事务隔离性问题，可能遇到脏读、幻读、不可重复读")]),t._v(" "),e("p",[t._v("​\t\t3、写写：有线程安全问题，可能存在更新丢失问题")]),t._v(" "),e("p",[t._v("​\t\tMVCC是一种用来解决读写冲突的无锁并发控制，也就是为事务分配单项增长的时间戳，为每个修改保存一个版本，版本与事务时间戳关联，读操作只读该事务开始前的数据库的快照，所以MVCC可以为数据库解决一下问题：")]),t._v(" "),e("p",[t._v("​\t\t1、在并发读写数据库时，可以做到在读操作时不用阻塞写操作，写操作也不用阻塞读操作，提高了数据库并发读写的性能")]),t._v(" "),e("p",[t._v("​\t\t2、解决脏读、幻读、不可重复读等事务隔离问题，但是不能解决更新丢失问题")]),t._v(" "),e("h3",{attrs:{id:"_6、mvcc实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、mvcc实现原理"}},[t._v("#")]),t._v(" 6、MVCC实现原理")]),t._v(" "),e("p",[t._v("​\t\tmvcc的实现原理主要依赖于记录中的三个隐藏字段，undolog，read view来实现的。")]),t._v(" "),e("p",[t._v("​\t\t"),e("strong",[t._v("隐藏字段")])]),t._v(" "),e("p",[t._v("​\t\t每行记录除了我们自定义的字段外，还有数据库隐式定义的DB_TRX_ID,DB_ROLL_PTR,DB_ROW_ID等字段")]),t._v(" "),e("p",[t._v("​\t\tDB_TRX_ID")]),t._v(" "),e("p",[t._v("​\t\t6字节，最近修改事务id，记录创建这条记录或者最后一次修改该记录的事务id")]),t._v(" "),e("p",[t._v("​\t\tDB_ROLL_PTR")]),t._v(" "),e("p",[t._v("​\t\t7字节，回滚指针，指向这条记录的上一个版本,用于配合undolog，指向上一个旧版本")]),t._v(" "),e("p",[t._v("​\t\tDB_ROW_JD")]),t._v(" "),e("p",[t._v("​\t\t6字节，隐藏的主键，如果数据表没有主键，那么innodb会自动生成一个6字节的row_id")]),t._v(" "),e("p",[t._v("​\t\t记录如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"%E6%95%B0%E6%8D%AE%E6%A1%88%E4%BE%8B.png",alt:"image-20210225233929554"}})]),t._v(" "),e("p",[t._v("​\t\t在上图中，DB_ROW_ID是数据库默认为该行记录生成的唯一隐式主键，DB_TRX_ID是当前操作该记录的事务ID，DB_ROLL_PTR是一个回滚指针，用于配合undo日志，指向上一个旧版本")]),t._v(" "),e("p",[t._v("​\t\t"),e("strong",[t._v("undo log")])]),t._v(" "),e("p",[t._v("​\t\tundolog被称之为回滚日志，表示在进行insert，delete，update操作的时候产生的方便回滚的日志")]),t._v(" "),e("p",[t._v("​\t\t当进行insert操作的时候，产生的undolog只在事务回滚的时候需要，并且在事务提交之后可以被立刻丢弃")]),t._v(" "),e("p",[t._v("​\t\t当进行update和delete操作的时候，产生的undolog不仅仅在事务回滚的时候需要，在快照读的时候也需要，所以不能随便删除，只有在快照读或事务回滚不涉及该日志时，对应的日志才会被purge线程统一清除（当数据发生更新和删除操作的时候都只是设置一下老记录的deleted_bit，并不是真正的将过时的记录删除，因为为了节省磁盘空间，innodb有专门的purge线程来清除deleted_bit为true的记录，如果某个记录的deleted_id为true，并且DB_TRX_ID相对于purge线程的read view 可见，那么这条记录一定时可以被清除的）")]),t._v(" "),e("p",[t._v("​\t\t"),e("strong",[t._v("下面我们来看一下undolog生成的记录链")])]),t._v(" "),e("p",[t._v("​\t\t1、假设有一个事务编号为1的事务向表中插入一条记录，那么此时行数据的状态为：")]),t._v(" "),e("p",[e("img",{attrs:{src:"1.png",alt:"image-20210225235444975"}})]),t._v(" "),e("p",[t._v("​\t\t2、假设有第二个事务编号为2对该记录的name做出修改，改为lisi")]),t._v(" "),e("p",[t._v("​\t\t在事务2修改该行记录数据时，数据库会对该行加排他锁")]),t._v(" "),e("p",[t._v("​\t\t然后把该行数据拷贝到undolog中，作为 旧记录，即在undolog中有当前行的拷贝副本")]),t._v(" "),e("p",[t._v("​\t\t拷贝完毕后，修改该行name为lisi，并且修改隐藏字段的事务id为当前事务2的id，回滚指针指向拷贝到undolog的副本记录中")]),t._v(" "),e("p",[t._v("​\t\t事务提交后，释放锁")]),t._v(" "),e("p",[e("img",{attrs:{src:"2.png",alt:"image-20210313220450629"}})]),t._v(" "),e("p",[t._v("​\t\t3、假设有第三个事务编号为3对该记录的age做了修改，改为32")]),t._v(" "),e("p",[t._v("​\t\t在事务3修改该行数据的时，数据库会对该行加排他锁")]),t._v(" "),e("p",[t._v("​\t\t然后把该行数据拷贝到undolog中，作为旧纪录，发现该行记录已经有undolog了，那么最新的旧数据作为链表的表头，插在该行记录的undolog最前面")]),t._v(" "),e("p",[t._v("​\t\t修改该行age为32岁，并且修改隐藏字段的事务id为当前事务3的id，回滚指针指向刚刚拷贝的undolog的副本记录")]),t._v(" "),e("p",[t._v("​\t\t事务提交，释放锁")]),t._v(" "),e("p",[e("img",{attrs:{src:"3.png",alt:"image-20210313220337624"}})]),t._v(" "),e("p",[t._v("​\t\t从上述的一系列图中，大家可以发现，不同事务或者相同事务的对同一记录的修改，会导致该记录的undolog生成一条记录版本线性表，即链表，undolog的链首就是最新的旧记录，链尾就是最早的旧记录。")]),t._v(" "),e("p",[t._v("​\t\t"),e("strong",[t._v("Read View")])]),t._v(" "),e("p",[t._v("​\t\t上面的流程如果看明白了，那么大家需要再深入理解下read view的概念了。")]),t._v(" "),e("p",[t._v("​\t\tRead View是事务进行快照读操作的时候生产的读视图，在该事务执行快照读的那一刻，会生成一个数据系统当前的快照，记录并维护系统当前活跃事务的id，事务的id值是递增的。")]),t._v(" "),e("p",[t._v("​\t\t其实Read View的最大作用是用来做可见性判断的，也就是说当某个事务在执行快照读的时候，对该记录创建一个Read View的视图，把它当作条件去判断当前事务能够看到哪个版本的数据，有可能读取到的是最新的数据，也有可能读取的是当前行记录的undolog中某个版本的数据")]),t._v(" "),e("p",[t._v("​\t\tRead View遵循的可见性算法主要是将要被修改的数据的最新记录中的DB_TRX_ID（当前事务id）取出来，与系统当前其他活跃事务的id去对比，如果DB_TRX_ID跟Read View的属性做了比较，不符合可见性，那么就通过DB_ROLL_PTR回滚指针去取出undolog中的DB_TRX_ID做比较，即遍历链表中的DB_TRX_ID，直到找到满足条件的DB_TRX_ID,这个DB_TRX_ID所在的旧记录就是当前事务能看到的最新老版本数据。")]),t._v(" "),e("p",[t._v("​\t\tRead View的可见性规则如下所示：")]),t._v(" "),e("p",[t._v("​\t\t首先要知道Read View中的三个全局属性：")]),t._v(" "),e("p",[t._v("​\t\ttrx_list:一个数值列表，用来维护Read View生成时刻系统正活跃的事务ID（1,2,3）")]),t._v(" "),e("p",[t._v("​\t\tup_limit_id:记录trx_list列表中事务ID最小的ID（1）")]),t._v(" "),e("p",[t._v("​\t\tlow_limit_id:Read View生成时刻系统尚未分配的下一个事务ID，（4）")]),t._v(" "),e("p",[t._v("​\t\t具体的比较规则如下：")]),t._v(" "),e("p",[t._v("​\t\t1、首先比较DB_TRX_ID < up_limit_id,如果小于，则当前事务能看到DB_TRX_ID所在的记录，如果大于等于进入下一个判断")]),t._v(" "),e("p",[t._v("​\t\t2、接下来判断DB_TRX_ID >= low_limit_id,如果大于等于则代表DB_TRX_ID所在的记录在Read View生成后才出现的，那么对于当前事务肯定不可见，如果小于，则进入下一步判断")]),t._v(" "),e("p",[t._v("​\t\t3、判断DB_TRX_ID是否在活跃事务中，如果在，则代表在Read View生成时刻，这个事务还是活跃状态，还没有commit，修改的数据，当前事务也是看不到，如果不在，则说明这个事务在Read View生成之前就已经开始commit，那么修改的结果是能够看见的。")]),t._v(" "),e("h3",{attrs:{id:"_7、mvcc的整体处理流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、mvcc的整体处理流程"}},[t._v("#")]),t._v(" 7、MVCC的整体处理流程")]),t._v(" "),e("p",[t._v("假设有四个事务同时在执行，如下图所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("事务1")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("事务2")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("事务3")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("事务4")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("事务开始")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事务开始")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事务开始")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事务开始")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修改且已提交")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("进行中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("快照读")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("进行中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("......")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("p",[t._v("从上述表格中，我们可以看到，当事务2对某行数据执行了快照读，数据库为该行数据生成一个Read View视图，可以看到事务1和事务3还在活跃状态，事务4在事务2快照读的前一刻提交了更新，所以，在Read View中记录了系统当前活跃事务1，3，维护在一个列表中。同时可以看到up_limit_id的值为1，而low_limit_id为5，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"F:%5Clian%5Coracle%5Cmvcc%5C4.png",alt:"image-20210227183316573"}})]),t._v(" "),e("p",[t._v("在上述的例子中，只有事务4修改过该行记录，并在事务2进行快照读前，就提交了事务，所以该行当前数据的undolog如下所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"F:%5Clian%5Coracle%5Cmvcc%5C5.png",alt:"image-20210227183849998"}})]),t._v(" "),e("p",[t._v("​\t\t当事务2在快照读该行记录的是，会拿着该行记录的DB_TRX_ID去跟up_limit_id,lower_limit_id和活跃事务列表进行比较，判读事务2能看到该行记录的版本是哪个。")]),t._v(" "),e("p",[t._v("​\t\t具体流程如下：先拿该行记录的事务ID（4）去跟Read View中的up_limit_id相比较，判断是否小于，通过对比发现不小于，所以不符合条件，继续判断4是否大于等于low_limit_id,通过比较发现也不大于，所以不符合条件，判断事务4是否处理trx_list列表中，发现不再次列表中，那么符合可见性条件，所以事务4修改后提交的最新结果对事务2 的快照是可见的，因此，事务2读取到的最新数据记录是事务4所提交的版本，而事务4提交的版本也是全局角度的最新版本。如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"F:%5Clian%5Coracle%5Cmvcc%5C6.png",alt:"image-20210227185820394"}})]),t._v(" "),e("p",[t._v("当上述的内容都看明白了的话，那么大家就应该能够搞清楚这几个核心概念之间的关系了，下面我们讲一个不同的隔离级别下的快照读的不同。")]),t._v(" "),e("h3",{attrs:{id:"_8、rc、rr级别下的innodb快照读有什么不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、rc、rr级别下的innodb快照读有什么不同"}},[t._v("#")]),t._v(" 8、RC、RR级别下的InnoDB快照读有什么不同")]),t._v(" "),e("p",[t._v("​\t\t因为Read View生成时机的不同，从而造成RC、RR级别下快照读的结果的不同")]),t._v(" "),e("p",[t._v("​\t\t1、在RR级别下的某个事务的对某条记录的第一次快照读会创建一个快照即Read View,将当前系统活跃的其他事务记录起来，此后在调用快照读的时候，还是使用的是同一个Read View,所以只要当前事务在其他事务提交更新之前使用过快照读，那么之后的快照读使用的都是同一个Read View,所以对之后的修改不可见")]),t._v(" "),e("p",[t._v("​\t\t2、在RR级别下，快照读生成Read View时，Read View会记录此时所有其他活动和事务的快照，这些事务的修改对于当前事务都是不可见的，而早于Read View创建的事务所做的修改均是可见")]),t._v(" "),e("p",[t._v("​\t\t3、在RC级别下，事务中，每次快照读都会新生成一个快照和Read View,这就是我们在RC级别下的事务中可以看到别的事务提交的更新的原因。")]),t._v(" "),e("p",[t._v("​\t\t"),e("strong",[t._v("总结：在RC隔离级别下，是每个快照读都会生成并获取最新的Read View,而在RR隔离级别下，则是同一个事务中的第一个快照读才会创建Read View，之后的快照读获取的都是同一个Read View.")])])])}),[],!1,null,null,null);_.default=a.exports}}]);